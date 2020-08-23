import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyFilterModule, InputTextModule } from 'primeng/primeng';
import { CustomInputNumberComponent } from './input-number.component';
import { CustomLabelModule } from '../../label/label.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        KeyFilterModule,
        InputTextModule,

        CustomLabelModule,
    ],
    declarations: [CustomInputNumberComponent],
    exports: [CustomInputNumberComponent]
})
export class CustomInputNumberModule {}