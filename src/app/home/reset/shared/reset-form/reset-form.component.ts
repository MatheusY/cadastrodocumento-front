import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'reset-form',
    templateUrl: './reset-form.component.html',
})
export class ResetFormComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ){
        this.form = formBuilder.group(
            {
                email: [null, [Validators.required, Validators.email]]
            }
        );
    }

    
}