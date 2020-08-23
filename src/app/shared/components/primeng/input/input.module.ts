import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputNumberModule } from './number/input-number.module';

@NgModule({
    imports: [CommonModule],
    exports: [
        CustomInputNumberModule,
    ]
})
export class CustomInputModule {}