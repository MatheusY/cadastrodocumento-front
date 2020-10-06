import { Input, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Perfil } from 'app/shared/components/models';

@Component({
    selector: 'usuario-form',
    templateUrl: './usuario-form.component.html',
    styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent {
    @Input() perfis: Perfil[];
    
    form: FormGroup;
    isAdmin = false;

    private _model: User;


    constructor(public formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            usuario: ['Usuario', Validators.required],
            email: ['Email', Validators.required],
            perfil: ['Perfil', Validators.required],
            ativo: [true],
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

    @Input()
    set usuarioLogado(value: User) {
        if(value && value.perfil.id === 1 && value.usuario !== this.form.get('usuario').value){
            this.isAdmin = true;
        } else {
            this.isAdmin = false;
        }
    }

    get model(): User {
        return this._model;
    }

    onAtivo(){
        console.log(this.form);
    }

}