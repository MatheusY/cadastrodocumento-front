import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PageListComponent } from 'app/shared/components/page';
import { User, Perfil, Pageable } from 'app/shared/components/models';
import { UserService, MessagesService, PerfissService } from 'app/core/services';
import { Component } from '@angular/core';

@Component({
    selector: 'usuario-list',
    templateUrl: './usuario-list.component.html',
})
export class UsuarioListComponent extends PageListComponent<User, number> {

    perfis$: Observable<Perfil[]>;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        protected usuarioService: UserService,
        private perfilService: PerfissService,
    ){
        super(router, activatedRoute, messagesService, usuarioService, usuarioService);
        this.perfis$ = perfilService.listAll();
    }

    onEdit(model: User): void {
        this.navigateToFormUser(['..', model.id, 'editar']);
    }

    navigateToFormUser(commands: any[]): void {
        const rota = this.router.url.split('?')[0];
        this.router.navigate(commands, {
            relativeTo: this.activatedRoute,
            state: {
                queryParams: {
                    ...this.searchParams,
                    page: this.pageable.pageNumber,
                    size: this.pageable.pageSize,
                }
            },
            queryParams: {
                'redirectUrl': rota,
            }
        })
    }

    onReset(even?: any): void {
        this.filterForm.form.patchValue(
            {
                usuario: null,
                email: null,
                perfil: null,
                ativo: true,
                inativo: true,
            }
        );
        this.dataSource.clear();
        this.router.navigate([],{});
        this.onSearch();
    }
}