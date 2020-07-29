import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableColumnModule } from './column/column.module';
import { TableComponent } from './table.component';
import { SharedPipesModule } from 'app/shared/components/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        TableModule,

        SharedPipesModule,

        TableColumnModule
    ],
    declarations: [TableComponent],
    exports: [
        TableComponent,
        TableColumnModule
    ]
})
export class CustomTableModule {}