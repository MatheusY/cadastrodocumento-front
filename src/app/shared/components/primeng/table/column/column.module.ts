import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumnComponent } from './column.component';
import { TableColumnTextModule } from './text/column-text.module';
import { TableColumnMenuModule } from './menu/column-menu.module';

@NgModule({
    imports: [CommonModule],
    declarations: [TableColumnComponent],
    exports: [
        TableColumnMenuModule,
        TableColumnTextModule,
    ]
})
export class TableColumnModule {}