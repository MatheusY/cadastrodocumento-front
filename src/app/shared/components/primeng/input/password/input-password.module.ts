import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomErrorModule } from '../../error/error.module';
import { CustomLabelModule } from '../../label/label.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/primeng';
import { CustomInputPasswordComponent } from './input-password.component';

@NgModule({
    imports: [
        CommonModule,
        CustomErrorModule,
        CustomLabelModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
    ],
    declarations: [CustomInputPasswordComponent],
    exports: [CustomInputPasswordComponent],
})
export class CustomInputPasswordModule {}