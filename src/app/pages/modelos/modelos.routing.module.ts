import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import { ModeloNewComponent } from './modelo-new/modelo-new.component';
import { ModeloEditComponent } from './modelo-edit/modelo-edit.component';
import { ModelosService } from 'app/core/services';

const routes: Routes = [
    {
        path: 'listar',
        component: ModeloListComponent
    },
    {
        path: 'adicionar',
        component: ModeloNewComponent
    },
    {
        path: ':id/editar',
        component: ModeloEditComponent,
        resolve: {
            model: ModelosService
        },
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
    exports: [ RouterModule ]
})
export class ModelosRoutingModule {}