import { Injectable, Component, Input } from '@angular/core';

@Component({
    selector: 'custom-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class CustomToastComponent {
    @Input() key: string;
    @Input() position = 'top-center';


}