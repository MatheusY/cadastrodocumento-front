import { NgModule } from '@angular/core';
import { CustomTableModule } from './table/table.module';
import { CustomSelectModule } from './select/select.module';
import { CustomLabelModule } from './label/label.module';
import { CustomInputModule } from './input/input.module';
import { CustomButtonModule } from './button/button.module';
import { CustomToastModule } from './toast/toast.module';
import { CustomErrorModule } from './error/error.module';
import { CustomDialogModule } from './dialog/dialog.module';

const MS_PRIMENG_COMPONENTS_MODULES = [
    CustomButtonModule,
    CustomDialogModule,
    CustomErrorModule,
    CustomInputModule,
    CustomLabelModule,
    CustomSelectModule,
    CustomTableModule,
    CustomToastModule,
]

@NgModule({
    imports: MS_PRIMENG_COMPONENTS_MODULES,
    exports: MS_PRIMENG_COMPONENTS_MODULES
})
export class PrimengComponentsModule {}