import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableColumnTextComponent } from './column-text.component';
import { SharedPipesModule } from 'app/shared/components/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        SharedPipesModule
    ],
    declarations: [TableColumnTextComponent],
    exports: [TableColumnTextComponent]
})
export class TableColumnTextModule {}