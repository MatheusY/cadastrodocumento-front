import { Component, ViewChild } from '@angular/core';
import { UserService, MessagesService } from 'app/core/services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { FormSubmit } from 'app/shared/components/api/form-submit.service';
import { User } from 'app/shared/components/models';
import { takeUntil, finalize } from 'rxjs/operators';

@Component({
    selector: 'senha-edit',
    templateUrl: './senha-edit.component.html',
    styleUrls: ['./senha-edit.component.scss'],
})
export class SenhaEditComponent extends FormSubmit<User, number>{
    @ViewChild('modelForm', { static: false}) modelForm: any;
    
    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messageService: MessagesService,
        protected userService: UserService){
            super(router, activatedRoute, messageService, userService);
        }

    onSave(){
        const novaSenha = this.modelForm.form.get('novaSenha').value;
        const novaSenhaConfirmacao = this.modelForm.form.get('novaSenhaConfirmacao').value;
        if(novaSenha === novaSenhaConfirmacao){
            this.update(this.modelForm.form, () => {
                this.router.navigate(['modelo']);
            });
        } else {
            this.messageService.error('As senhas estão diferentes!');
        }
    }

    update(form: FormGroup, next?: (value: number) => void, error?: (response: HttpErrorResponse) => void): void{
        if (!this.validate(form)){
            return;
        }
        this.loadingSubject.next(true);
        return this.save(this.prepare(form), form, next, error);
    }

    save(
        usuario: User,
        form: FormGroup,
        next?: (value: number) => void,
        error?: (response: HttpErrorResponse) => void,
    ): void {
        this.userService
            .updatePassword(usuario)
            .pipe(
                takeUntil(this.unscribeAll),
                finalize(() => this.loadingSubject.next(false)),
            )
            .subscribe(
                (value:number) => {
                    if(next) {
                        next(value);
                        this.messageService.success(MessagesService.UPDATED_RECORD);
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

}