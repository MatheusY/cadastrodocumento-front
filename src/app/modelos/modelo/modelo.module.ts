import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModeloComponent } from './modelo.component';
@NgModule({
    declarations: [ModeloComponent],
    imports: [ 
        CommonModule,
        HttpClientModule
    ],
    exports: [ModeloComponent]
})
export class ModeloModule {}