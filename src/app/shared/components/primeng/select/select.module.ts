import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';
import { CustomSelectComponent } from './select.component';
import { CustomLabelModule } from '../label/label.module';
import { CustomErrorModule } from '../error/error.module';

@NgModule({
    imports: [
        CommonModule,
        CustomErrorModule,
        CustomLabelModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [CustomSelectComponent],
    exports: [CustomSelectComponent],
})
export class CustomSelectModule {}