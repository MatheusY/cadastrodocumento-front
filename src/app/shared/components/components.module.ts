import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PrimengComponentsModule } from './primeng/primeng.module';
import { SharedPipesModule } from './pipes/pipes.module';
import { DirectiveModule } from './directives/directives.module';

const SHARED_COMPONENTS_MODULES = [
    DirectiveModule, 
    PrimengComponentsModule,
    SharedPipesModule,
    FormsModule,
    ReactiveFormsModule,
];
@NgModule({
    imports: SHARED_COMPONENTS_MODULES,
    exports: SHARED_COMPONENTS_MODULES
})
export class SharedComponentsModule {}