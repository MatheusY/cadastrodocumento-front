import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService, UserService } from 'app/core/services';
import { Observable } from 'rxjs';
import { User } from 'app/shared/components/models';

@Component({
    selector: 'usuario-view',
    templateUrl: './usuario-view.component.html',
})
export class UsuarioViewComponent {

    usuario$: Observable<User>;
    
    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        private userService: UserService,
    ) {
        this.activatedRoute.params.subscribe(param => this.usuario$ = userService.findById(param.id));
    }

    onEdit(event) {
            this.navigateToForm(['..', 'editar']);
    }

    private navigateToForm(commands: any[]): void {
        this.router.navigate(commands, {
            relativeTo: this.activatedRoute,
            queryParams: {
                'redirectUrl':  this.router.url
            }
        });
    }

}