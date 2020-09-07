import { Component, forwardRef, SkipSelf, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { CustomInputComponent } from '../input.component';
import { CONTROL_CONTAINER_USE_FACTORY } from 'app/shared/constants';

@Component({
    selector: 'component-input-password',
    templateUrl: './input-password.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CustomInputPasswordComponent),
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
export class CustomInputPasswordComponent extends CustomInputComponent {

    @Input() feedback = false;

    constructor(protected controlContainer: ControlContainer){
        super(controlContainer);
    }
}