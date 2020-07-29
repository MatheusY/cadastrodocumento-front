import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import { ModelosRoutingModule } from './modelos.routing.module';
import { ModeloTableComponent } from './shared/modelo-table/modelo-table.component';
import { SharedComponentsModule } from 'app/shared/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedComponentsModule,
        ModelosRoutingModule,
        TableModule,
    ],
    declarations: [
        ModeloListComponent,
        ModeloTableComponent,
    ]
})
export class ModelosModule {}