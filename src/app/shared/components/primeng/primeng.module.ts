import { NgModule } from '@angular/core';
import { CustomTableModule } from './table/table.module';

const MS_PRIMENG_COMPONENTS_MODULES = [
    CustomTableModule
]

@NgModule({
    imports: MS_PRIMENG_COMPONENTS_MODULES,
    exports: MS_PRIMENG_COMPONENTS_MODULES
})
export class PrimengComponentsModule {}