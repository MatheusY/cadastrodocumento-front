import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'app/core/services';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'usuario-validate',
    templateUrl: './usuario-validate.component.html',
    styleUrls: ['./usuario-validate.component.scss'],
})
export class UsuarioValidateComponent implements OnInit{

    mensagem: string;

    private _id;
    private _key;

    constructor(
        private router: Router,
        private activatedRouter: ActivatedRoute,
        private usuarioService: AuthService,
    ){
        this.activatedRouter.params.subscribe(param => this._id = param['id']);
        this.activatedRouter.queryParams.subscribe(params => this._key = params['key']);
    }

    ngOnInit(): void {
        this.validarConta();
    }

    validarConta(next?: () => void, error?: (response: HttpErrorResponse) => void): void{
        this.usuarioService
            .validaEmail(this._id, this._key)
            .subscribe(
                () => {
                    this.mensagem = 'Conta válidada, peça para o administrador ativar a sua conta!';
                },
                (response: HttpErrorResponse) => {
                    this.mensagem = response.error.message;
                });
    }

}