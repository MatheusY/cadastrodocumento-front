import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, MessagesService } from 'app/core/services';
import { User } from 'app/shared/components/models';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnDestroy {

    unscribeAll = new Subject<User>();
    loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ = this.loadingSubject.asObservable();
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private messagesService: MessagesService,
    ){
        this.form = this.formBuilder.group({
            usuario: [null, [Validators.required, Validators.minLength(4)]],
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.required, Validators.minLength(4)]],
            confirmacaoSenha: [null, Validators.required],
        });
    }
    ngOnDestroy(): void {
        this.unscribeAll.next();
        this.unscribeAll.complete();
        this.loadingSubject.complete();
    }

    onCancel(){
        this.router.navigate(['../']);
    }

    onSave(){
        const senha = this.form.get('senha').value;
        const senhaConfirmacao = this.form.get('confirmacaoSenha').value;
        if(senha === senhaConfirmacao){
            this.loadingSubject.next(true);
            this.salvarUsuario(this.form.value, 
                () => this.router.navigate([''])
            );
        } else {
            this.messagesService.error('As senhas estão diferentes!');
        }
    }

    
    private salvarUsuario(
        usuario: User,
        next: () => void): void{
            this.authService
            .cadastraConta(usuario)
            .pipe(
                takeUntil(this.unscribeAll),
                finalize(() => this.loadingSubject.next(false)),
            )
            .subscribe(
                () => {
                    next();
                    this.messagesService.success('Usuário criado! Por favor confirme o seu email.', 100000);
                },
                (response: HttpErrorResponse) => this.messagesService.error(response.error.message)
            )
        }
}