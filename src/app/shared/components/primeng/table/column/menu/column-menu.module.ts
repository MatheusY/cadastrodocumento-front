import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/primeng';
import { TableColumnMenuComponent } from './column-menu.component';


@NgModule({
    imports: [
        CommonModule,
        SplitButtonModule,
    ],
    declarations: [TableColumnMenuComponent],
    exports: [TableColumnMenuComponent, SplitButtonModule],
})
export class TableColumnMenuModule {}