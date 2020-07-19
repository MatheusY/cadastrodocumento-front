import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModeloListComponent } from './modelo-list.component';

@NgModule({
    declarations: [
        ModeloListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ModeloListModule{}