import { Component, Input } from '@angular/core';

@Component({
    selector: 'component-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss']
})
export class CustomLabelComponent {
    @Input() id: string;
    @Input() target: string;
    @Input() value: string;
    @Input() required: boolean;
}