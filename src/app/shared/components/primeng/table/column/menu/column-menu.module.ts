import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/primeng';
import { TableColumnMenuComponent } from './column-menu.component';
import { CustomConfirmDialogModule } from '../../../dialog/confirm/confirm-dialog.module';


@NgModule({
    imports: [
        CommonModule,
        CustomConfirmDialogModule,
        SplitButtonModule,
    ],
    declarations: [TableColumnMenuComponent],
    exports: [TableColumnMenuComponent, SplitButtonModule],
})
export class TableColumnMenuModule {}