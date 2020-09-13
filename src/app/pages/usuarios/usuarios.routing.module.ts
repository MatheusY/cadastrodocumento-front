import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { UserService } from 'app/core/services';

const routes: Routes = [
    {
        path: 'visualizar',
        component: UsuarioViewComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class UsuariosRoutingModule {}