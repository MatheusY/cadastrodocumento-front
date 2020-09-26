import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Error404Component } from './error-404.component';

@NgModule({
    imports: [
        RouterModule,
        MatIconModule,
    ],
    declarations: [Error404Component],
})
export class Error404Module {}