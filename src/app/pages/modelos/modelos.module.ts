import { NgModule } from '@angular/core';
import { ModelosRoutingModule } from './modelos.routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModeloListComponent } from './modelo-list/modelo-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ModelosRoutingModule,
    ],
    declarations: [
        ModeloListComponent
    ]
})
export class ModelosModule {}