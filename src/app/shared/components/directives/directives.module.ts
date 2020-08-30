import { NgModule } from '@angular/core';
import { DndDirective } from './drag-drop/dnd.directive';

const SHARED_DIRECTIVES = [
    DndDirective,
]

@NgModule({
    declarations: SHARED_DIRECTIVES,
    exports: SHARED_DIRECTIVES,
})
export class DirectiveModule {}