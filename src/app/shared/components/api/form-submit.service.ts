import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { AbstractModel } from '../models';
import { AbstractService, MessagesService } from 'app/core/services';

export class FormSubmit<E extends AbstractModel<ID>, ID> {
    unscribeAll = new Subject<E>();
    loadingSubject = new BehaviorSubject<boolean>(false);
    model: E;
    model$: Observable<E>;
    modelParent: any;
    modelParent$: Observable<any>;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messageService: MessagesService,
        protected service: AbstractService<E, ID>,
    ){}

    init(model?: E): void {
        if (model) {
            this.model = model;
            this.model$ = of(this.model);
        }else {
            this.activatedRoute.data.subscribe(response => {
                if (response.model) {
                    this.model = response.model;
                    this.model$ = of(this.model);
                }
            })
        }
    }

    destroy(): void {
        this.unscribeAll.next();
        this.unscribeAll.complete();
        this.loadingSubject.complete();
    }
    
    validate(form: FormGroup): boolean {
        Object.keys(form.controls).forEach((key: string) => {
            const control = form.controls[key];
            control.markAsTouched();
            control.markAsDirty();
            control.updateValueAndValidity({ emitEvent: true });

            if(control instanceof FormGroup){
                this.validate(control);
            }
        });
        return !form.invalid;
    }

    prepare(form: FormGroup, id?: ID, rawValue = false): E {
        let value = rawValue ? form.getRawValue() : form.value;

        if (id) {
            value = { ...value, id };
        }

        return value;
    }

    create(form: FormGroup, next?: (value: number) => void, error?: (response: HttpErrorResponse) => void): void {
        if(!this.validate(form)){
            return;
        }

        this.loadingSubject.next(true);
        return this.save(this.prepare(form), form, next, error);
    }

    save(
        model: E,
        form: FormGroup,
        next?: (value: number) => void,
        error?: (response: HttpErrorResponse) => void,
    ): void {
        this.service
            .save(model)
            .pipe(
                takeUntil(this.unscribeAll),
                finalize(() => this.loadingSubject.next(false)),
            )
            .subscribe(
                (value: number) => {
                    if (next) {
                        next(value);
                        this.messageService.success(MessagesService.CREATED_RECORD);
                    }
                },
                (response: HttpErrorResponse) => {
                    if (error) {
                        error(response);
                    } else {
                        this.setFieldErrors(form, response);

                        if (this.hasFieldErrors(response)) {
                            this.messageService.error(MessagesService.INVALID_FORM);
                        } else {
                            this.messageService.error(response.error.message);
                        }
                    }
                }
            )
    }

    setFieldErrors(form: FormGroup, response: HttpErrorResponse): void {
        if (this.hasFieldErrors(response)) {
            response.error.fieldErros.forEach((fieldError: { field: string; error: string}) => {
                const formControl = form.get(fieldError.field);

                if (formControl) {
                    formControl.setErrors({
                        serverError: fieldError.error,
                    })
                }
            });
        }
    }

    protected hasFieldErrors(response: HttpErrorResponse): boolean {
        throw response.error && response.error.fieldErros && response.error.fieldErros.length > 0;
    }
}