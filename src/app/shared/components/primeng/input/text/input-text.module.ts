import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/primeng';
import { CustomErrorModule } from '../../error/error.module';
import { CustomLabelModule } from '../../label/label.module';
import { CustomInputTextComponent } from './input-text.component';

@NgModule({
    imports: [
        CommonModule,
        CustomErrorModule,
        CustomLabelModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule
    ],
    declarations:[CustomInputTextComponent],
    exports: [CustomInputTextComponent],
})
export class CustomInputTextModule {}