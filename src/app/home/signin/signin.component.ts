import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService, MessagesService, UserService } from 'app/core/services';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from 'app/shared/components/models';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy{
    unscribeAll = new Subject<User>();
    loadingSubject = new BehaviorSubject<boolean>(false);
    fromUrl: string;
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private messagesService: MessagesService,
        private userService: UserService,
    ){}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl'])
        this.form = this.formBuilder.group({
            usuario: [null, Validators.required],
            senha: [null, Validators.required]
        });
    }

    ngOnDestroy(): void {
        this.unscribeAll.next();
        this.unscribeAll.complete();
        this.loadingSubject.complete();
    }

    login(){
        if(!this.validate(this.form)){
            return;
        }
        this.loadingSubject.next(true);

        const usuario = this.form.get('usuario').value;
        const senha = this.form.get('senha').value;

        this.authService
            .authenticate(usuario, senha)
            .pipe(
                takeUntil(this.unscribeAll),
                finalize(() => this.loadingSubject.next(false)),
            )
            .subscribe(
                () =>  {
                    this.router.navigate(['modelo']);
                },
                (response: HttpErrorResponse) => {
                    if(response.error){
                        const jsonResponse = JSON.parse(response.error);
                        this.messagesService.error(jsonResponse.message);
                    }else {
                        this.messagesService.error(MessagesService.SERVER_ERROR);
                    }
                }
            );
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

}