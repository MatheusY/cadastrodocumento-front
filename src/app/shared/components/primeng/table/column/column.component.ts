import { OnInit, Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'component-column',
    templateUrl: './column.component.html'
})
export class TableColumnComponent{
    @Input() type = 'auto';
    @Input() header: string;
    @Input() property: string;

    @ContentChild(TemplateRef,{ static: true}) template: TemplateRef<any>;

}