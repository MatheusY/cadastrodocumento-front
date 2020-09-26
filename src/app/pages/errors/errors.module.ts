import { NgModule } from '@angular/core';
import { Error404Module } from './error-404/error-404.module';

@NgModule({
    imports: [ 
        Error404Module,
    ],
    exports: [Error404Module],
})
export class ErrorsModule {}