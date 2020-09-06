import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/primeng';
import { CustomButtonModule } from '../../button/button.module';
import { CustomConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        CustomButtonModule,
        DialogModule,
    ],
    declarations: [CustomConfirmDialogComponent],
    exports: [CustomConfirmDialogComponent],
})
export class CustomConfirmDialogModule {}