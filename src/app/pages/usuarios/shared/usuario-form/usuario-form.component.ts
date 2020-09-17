import { User } from 'app/shared/components/models';
import { Input, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'usuario-form',
    templateUrl: './usuario-form.component.html',
    styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent {
    
    form: FormGroup;

    private _model: User;

    constructor(public formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            usuario: ['Usuario', Validators.required],
            email: ['Email', Validators.required],
            perfil: ['Perfil', Validators.required]
        });
    }

    @Input()
    set model(value: User) {
        this._model = value;

        if(this._model){
            this.form.patchValue({
                ...this._model,
            });
        }
    }

    get model(): User {
        return this._model;
    }
}