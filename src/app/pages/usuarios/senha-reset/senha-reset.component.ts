import { ViewChild, OnDestroy, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService, MessagesService, update, UserService } from 'app/core/services';

@Component({
    selector: 'senha-reset',
    templateUrl: './senha-reset.component.html',
    styleUrls: ['./senha-reset.component.scss'],
})
export class SenhaResetComponent implements OnDestroy{
    @ViewChild('modelForm', { static: false}) modelForm: any;

    loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ = this.loadingSubject.asObservable();

    private _senha: string;
    private _key: string;

    constructor(
        protected router: Router,
        private activatedRouter: ActivatedRoute,
        private messageService: MessagesService,
        private usuarioService: UserService,
        protected authService: AuthService,
    ){
        this.activatedRouter.queryParams.subscribe(params => this._key = params['key']);
    }

    ngOnDestroy(): void {
        this.loadingSubject.complete();
    }

    onConfirm(){
        this._senha = this.modelForm.form.get('novaSenha').value;
        const novaSenhaConfirmacao = this.modelForm.form.get('novaSenhaConfirmacao').value;
        if(this._senha === novaSenhaConfirmacao){
            this.update(this.modelForm.form, () => {
                this.usuarioService.logout();
                this.router.navigate(['modelo']);
            });
        } else {
            this.messageService.error('As senhas estão diferentes!');
        }
    }

        update(form: FormGroup, next?: () => void): void{
            if (!this.validate(form)){
                return;
            }
            this.loadingSubject.next(true);
            return this.save(this._key, this._senha, form, next);
        }
    
        save(
            key: string,
            senha: string,
            form: FormGroup,
            next?: () => void,
        ): void {
            this.authService
                .resetSenha(key, senha)
                .pipe(
                    finalize(() => this.loadingSubject.next(false)),
                )
                .subscribe(
                    () => {
                        if(next) {
                            next();
                            this.messageService.success('Senha atualizada!');
                        }
                    },
                    (response: HttpErrorResponse) => this.messageService.error(response.error.message)
                )
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