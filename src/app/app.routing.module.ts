import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {AuthGuard } from './core/auth/auth.guard'
import { ModeloListComponent } from './modelos/modelo-list/modelo-list.component'
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    // {
    //     path: 'user/:userName',
    //     component: ModeloListComponent,
    //     canActivate: [AuthGuard],
    //     data: {
    //         title: 'Inicio'
    //     }
    // }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }