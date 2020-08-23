import { OnInit, HostBinding, Input, Component, Output, EventEmitter, forwardRef, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CONTROL_CONTAINER_USE_FACTORY } from 'app/shared/constants';

@Component({
    selector: 'component-select',
    templateUrl: './select.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomSelectComponent),
            multi: true,
        }
    ],
    viewProviders: [
        {
          provide: ControlContainer,
          useFactory: CONTROL_CONTAINER_USE_FACTORY,
          deps: [[new SkipSelf(), ControlContainer]],
        },
      ],
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit {
    @HostBinding('class') hostClass = 'p-col';

    @Input() name = '';
    @Input() label: string;
    @Input() value: string;
    @Input() model = '';
    @Input() options = [];
    @Input() optionLabel = 'nome';
    @Input() optionValue = 'id';

    @Output() modelChange = new EventEmitter<any>();
    @Output() change = new EventEmitter<any>();

    control: AbstractControl;

    private _id: string;
    private _formControlName: string;

    constructor(private controlContainer: ControlContainer) {}

    ngOnInit(): void {
        if (this.controlContainer) {
            if (this.formControlName) {
                this.control = this.controlContainer.control.get(this.formControlName);
            } else {
                console.warn('Missing FormControlName directive from host element of the component');
            }
        } else {
        console.warn('Can not find parent FormGroup directive');
        }

        if (this.value && !this.model) {
            this.model = this.value;
        }
    }

    @Input()
    set id(id: string) {
        this._id = id;
        this._formControlName = id;
    }

    get id(): string {
        return this._id;
    }

    @Input() 
    set fromControlName(formControlName: string) {
        this._formControlName = formControlName;
    }

    get formControlName(): string {
        return this._formControlName;
    }

    onChange(event: any): void {
        this.change.emit(event);
    }

    writeValue(value: any): void {
        this.model = value;
    }
    registerOnChange(fn: any): void {
        this.controlChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.controlTouch = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error('Method not implemented.');
    }

    private controlChange: () => void = () => {
        // ...
      };
    
      private controlTouch: () => void = () => {
        // ...
      };

}