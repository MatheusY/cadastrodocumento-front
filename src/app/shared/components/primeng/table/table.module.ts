import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableColumnModule } from './column/column.module';
import { TableComponent } from './table.component';
import { SharedPipesModule } from 'app/shared/components/pipes/pipes.module';
import { TableColumnMenuModule } from './column/menu/column-menu.module';

@NgModule({
    imports: [
        CommonModule,
        SharedPipesModule,
        TableModule,
        TableColumnModule,
        TableColumnMenuModule,
    ],
    declarations: [TableComponent],
    exports: [
        TableComponent,
        TableColumnModule,
        TableColumnMenuModule,
    ]
})
export class CustomTableModule {}