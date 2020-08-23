import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ProgressSpinnerModule } from 'primeng/primeng';
import { CustomButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ProgressSpinnerModule
    ],
    declarations: [CustomButtonComponent],
    exports: [CustomButtonComponent]
})
export class CustomButtonModule {}