import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, MessagesService } from 'app/core/services';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
    templateUrl: './reset.component.html'
})
export class ResetComponent implements OnDestroy{
    @ViewChild('modelForm', {static: false}) modelForm: any;

    unscribeAll = new Subject<void>();
    loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ = this.loadingSubject.asObservable();

    constructor(
        private router: Router,
        private authService: AuthService,
        private messagesService: MessagesService,
    ){}

    ngOnDestroy(): void {
        this.unscribeAll.next();
        this.unscribeAll.complete();
        this.loadingSubject.complete();
    }

    onCancel(){
        this.router.navigate(['../']);
    }

    onConfirm(){
        if(!this.validate(this.modelForm.form)){
            return;
        }
        this.loadingSubject.next(true);
        this.resetarSenha(() => this.router.navigate(['../']))
    }

    private resetarSenha(next: () => void): void{
        const email = this.modelForm.form.get('email').value;
        this.authService
            .geraResetSenha(email)
            .pipe(
                takeUntil(this.unscribeAll),
                finalize(() => this.loadingSubject.next(false)),
            )
            .subscribe(
                () => {
                    next();
                    this.messagesService.success('Email enviado para trocar a sua senha');
                },
                (response: HttpErrorResponse) => this.messagesService.error(response.error.message)
            );
    }

    private validate(form: FormGroup): boolean {
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

}