import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumnComponent } from './column.component';
import { TableColumnTextModule } from './text/column-text.module';

@NgModule({
    imports: [CommonModule],
    declarations: [TableColumnComponent],
    exports: [
        TableColumnTextModule
    ]
})
export class TableColumnModule {}