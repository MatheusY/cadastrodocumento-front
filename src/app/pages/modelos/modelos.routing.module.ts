import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import { ModeloNewComponent } from './modelo-new/modelo-new.component';

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
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class ModelosRoutingModule {}