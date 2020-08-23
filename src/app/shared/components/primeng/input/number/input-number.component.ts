import { Input, Output, EventEmitter, Component, forwardRef, SkipSelf } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { CustomInputComponent } from '../input.component';
import { CONTROL_CONTAINER_USE_FACTORY } from 'app/shared/constants';

@Component({
    selector: 'component-input-number',
    templateUrl: './input-number.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CustomInputNumberComponent),
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
export class CustomInputNumberComponent extends CustomInputComponent {

    @Input() maxlength: number;

    @Output() focus = new EventEmitter<any>();

}