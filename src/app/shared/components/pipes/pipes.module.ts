import { NgModule } from '@angular/core';
import { DeepValuePipe } from './deep-value.pipe';

const SHARED_PIPES = [
    DeepValuePipe
]

@NgModule({
    declarations: SHARED_PIPES,
    exports: SHARED_PIPES
})
export class SharedPipesModule {}