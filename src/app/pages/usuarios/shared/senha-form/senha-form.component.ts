import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'senha-form',
    templateUrl: './senha-form.component.html',
    styleUrls: ['./senha-form.component.scss'],
})
export class SenhaFormComponent {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.form = this.formBuilder.group({
            senha: [null, [Validators.required, Validators.minLength(4)]],
            novaSenha: [null, Validators.required, Validators.minLength(4)],
            novaSenhaConfirmacao: [null, Validators.required],
        });
    }
}