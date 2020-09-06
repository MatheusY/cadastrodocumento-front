import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomConfirmDialogModule } from './confirm/confirm-dialog.module';

@NgModule({
    imports: [CommonModule],
    declarations:[],
    exports: [CustomConfirmDialogModule]
})
export class CustomDialogModule {}