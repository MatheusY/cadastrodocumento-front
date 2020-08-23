import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';
import { CustomSelectComponent } from './select.component';
import { CustomLabelModule } from '../label/label.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomLabelModule,
        DropdownModule,
    ],
    declarations: [CustomSelectComponent],
    exports: [CustomSelectComponent],
})
export class CustomSelectModule {}