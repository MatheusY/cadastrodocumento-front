import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelComponent } from './label.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CustomLabelComponent],
    exports: [CustomLabelComponent]
})
export class CustomLabelModule {}