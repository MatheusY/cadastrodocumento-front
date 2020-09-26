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
            senha: [null, Validators.required],
            novaSenha: [null, Validators.required],
            novaSenhaConfirmacao: [null, Validators.required],
        });
    }
}