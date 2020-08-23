import { HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import camelCase from 'lodash/camelCase';

export abstract class CustomInputComponent {
    @HostBinding('class') hostClass = 'pcol';

    @Input() name = '';
    @Input() label: string;
    @Input() value: string | number;
    @Input() model: any = '';

    @Input('class') styleClass: string;

    @Output() modelChange = new EventEmitter<any>();

    control: AbstractControl;

    private _id: string;
    private _formControlName: string;

    @Input()
    set id(id: string){
        this._id = id;
        this._formControlName = id;
    }

    get id(): string {
        return this._id;
    }

    @Input()
    set formControlName(value: string) {
        this._formControlName = value;
    }

    get formControlName(): string {
        return this._formControlName;
    }
    
}