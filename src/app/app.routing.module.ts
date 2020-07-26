import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {AuthGuard } from './core/auth/auth.guard'
import { HomeModule } from './home/home.module'
import { ModelosModule } from './pages/modelos/modelos.module'

const routes: Routes = [

    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => HomeModule)
    },
    {
        path: 'modelo',
        loadChildren: () => import('./pages/modelos/modelos.module').then(m => ModelosModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },

]
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }