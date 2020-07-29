import { PrimengComponentsModule } from './primeng/primeng.module';
import { NgModule } from '@angular/core';
import { SharedPipesModule } from './pipes/pipes.module';

const SHARED_COMPONENTS_MODULES = [
    PrimengComponentsModule,
    SharedPipesModule
];
@NgModule({
    imports: SHARED_COMPONENTS_MODULES,
    exports: SHARED_COMPONENTS_MODULES
})
export class SharedComponentsModule {}