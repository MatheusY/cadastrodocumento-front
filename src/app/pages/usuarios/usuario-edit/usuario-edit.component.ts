import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEditComponent } from 'app/shared/components/page/page-edit.component';
import { User, Perfil } from 'app/shared/components/models';
import { MessagesService, UserService, PerfissService } from 'app/core/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.scss'],
})

export class UsuarioEditComponent extends PageEditComponent<User, number>{

    perfis$: Observable<Perfil[]>;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messageService: MessagesService,
        private usuarioService: UserService,
        private perfilService: PerfissService,
    ){
        super(router, activatedRoute, messageService, usuarioService);
        this.perfis$ = perfilService.listAll();
    }

    onCancel(){
        this.retornaPagina();
    }

    private retornaPagina() {
        const params = this.activatedRoute.snapshot.queryParams;
        if (params['redirectUrl']) {
            this.router.navigate([params['redirectUrl']]);
        }
        else {
            this.router.navigate(['..', 'visualizar']);
        }
    }

    onSave(event: Event): void {
        let value = this.modelForm.form.value;
        const id =this.model.id
        value = {...value, id}
        this.usuarioService.updateUser(value).subscribe(token =>  {
            if(token.token) {
                this.usuarioService.setToken(token.token);
            }
            this.retornaPagina();
            this.messageService.success(MessagesService.UPDATED_RECORD);
        });
    }
  
}