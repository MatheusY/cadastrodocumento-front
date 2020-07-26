import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloListComponent } from './modelo-list/modelo-list.component';

const routes: Routes = [
    {
        path: 'listar',
        component: ModeloListComponent
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