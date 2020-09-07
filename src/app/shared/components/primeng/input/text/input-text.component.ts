import { CustomInputComponent } from '../input.component';
import { Component, forwardRef, SkipSelf, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { CustomInputNumberComponent } from '../number/input-number.component';
import { CONTROL_CONTAINER_USE_FACTORY } from 'app/shared/constants';

@Component({
    selector: 'component-input-text',
    templateUrl: './input-text.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CustomInputTextComponent),
          multi: true,
        },
      ],
      viewProviders: [
        {
          provide: ControlContainer,
          useFactory: CONTROL_CONTAINER_USE_FACTORY,
          deps: [[new SkipSelf(), ControlContainer]],
        },
      ],
})
export class CustomInputTextComponent extends CustomInputComponent {
    @Input() autofocus = 'on';
    @Input() type = 'text';

    @Output() focus = new EventEmitter<any>();
    @Output() blur = new EventEmitter<any>();

    constructor(protected controlContainer: ControlContainer){
        super(controlContainer);
    }
    
}