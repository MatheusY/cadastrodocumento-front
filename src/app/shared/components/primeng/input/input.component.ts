import { HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer } from '@angular/forms';
import camelCase from 'lodash/camelCase';

export abstract class CustomInputComponent implements OnInit {

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

    constructor(protected controlContainer: ControlContainer) {}

    ngOnInit(): void {
        if (this.controlContainer){
            if (this.formControlName) {
                this.control = this.controlContainer.control.get(this.formControlName);
            }
        }

        if (this.value && !this.model){
            this.model = this.value;
        }
    }

    @Input()
    set id(id: string){
        this._id = id;
        this._formControlName = camelCase(id);
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