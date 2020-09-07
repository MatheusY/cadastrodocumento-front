import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputNumberModule } from './number/input-number.module';
import { CustomInputTextModule } from './text/input-text.module';
import { CustomInputPasswordModule } from './password/input-password.module';

@NgModule({
    imports: [CommonModule],
    exports: [
        CustomInputNumberModule,
        CustomInputPasswordModule,
        CustomInputTextModule,
    ]
})
export class CustomInputModule {}