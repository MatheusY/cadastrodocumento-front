import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/primeng';
import { CustomImageDialogComponent } from './image-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        DialogModule,
    ],
    exports: [CustomImageDialogComponent],
    declarations: [CustomImageDialogComponent],
})
export class CustomImageDialogModule {}