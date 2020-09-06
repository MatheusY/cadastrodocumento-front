import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomConfirmDialogModule } from './confirm/confirm-dialog.module';
import { CustomImageDialogModule } from './image/image-dialog.module';

@NgModule({
    imports: [CommonModule],
    declarations:[],
    exports: [CustomConfirmDialogModule, CustomImageDialogModule]
})
export class CustomDialogModule {}