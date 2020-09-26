import { Input, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Perfil } from 'app/shared/components/models';

@Component({
    selector: 'usuario-form',
    templateUrl: './usuario-form.component.html',
    styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent {
    
    form: FormGroup;
    isAdmin = false;

    private _model: User;

    @Input() perfis: Perfil[];

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
            if(this._model.perfil.id === 1){
                this.isAdmin = true;
            } else {
                this.isAdmin = false;
            }
        }
    }

    get model(): User {
        return this._model;
    }


}