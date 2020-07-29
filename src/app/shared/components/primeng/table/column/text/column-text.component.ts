import { OnInit, Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { TableColumnComponent } from '../column.component';

@Component({
    selector: 'component-column-text',
    templateUrl: './column-text.component.html',
    providers: [
        {
            provide: TableColumnComponent,
            useExisting: TableColumnTextComponent
        }
    ]
})
export class TableColumnTextComponent extends TableColumnComponent {
    @Input() header: string;
    @Input() property: string;

    @ViewChild('columnTemplate', {static: true}) template: TemplateRef<any>;
    
    type = 'text';
}