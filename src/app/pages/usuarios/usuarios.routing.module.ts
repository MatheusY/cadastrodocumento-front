import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { UserService } from 'app/core/services';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { SenhaEditComponent } from './senha-edit/senha-edit.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { UsuarioValidateComponent } from './usuario-validate/usuario-validate.component';

const routes: Routes = [
    {
        path: 'listar',
        component: UsuarioListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: ':id/visualizar',
        component: UsuarioViewComponent,
        canActivate: [AuthGuard],
        resolve: {
            model: UserService
        }
    },
    {
        path: ':id/editar',
        component: UsuarioEditComponent,
        canActivate: [AuthGuard],
        resolve: {
            model: UserService
        }
    },
    {
        path: 'trocar-senha',
        component: SenhaEditComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'validar-conta/:id',
        component:UsuarioValidateComponent,
    },
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class UsuariosRoutingModule {}