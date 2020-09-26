import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';

const routes: Routes = [
    {
        path: 'error-404',
        component: Error404Component,
        pathMatch: 'full',
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ErrorsRoutingModule {}