import { Component, Input } from '@angular/core';
import { User } from 'app/shared/components/models';

@Component({
    selector: 'usuario-form-view',
    templateUrl: './usuario-form-view.component.html',
    styleUrls: ['./usuario-form-view.component.scss']
})
export class UsuarioFormViewComponent {

    private _model: User;
    
    @Input()
    set model(value: User) {
        this._model = value;
    }

    get model(): User {
        return this._model;
    }
}