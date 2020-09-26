import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { UserService } from 'app/core/services';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { SenhaEditComponent } from './senha-edit/senha-edit.component';

const routes: Routes = [
    {
        path: ':id/visualizar',
        component: UsuarioViewComponent,
        resolve: {
            model: UserService
        }
    },
    {
        path: ':id/editar',
        component: UsuarioEditComponent,
        resolve: {
            model: UserService
        }
    },
    {
        path: 'trocar-senha',
        component: SenhaEditComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class UsuariosRoutingModule {}