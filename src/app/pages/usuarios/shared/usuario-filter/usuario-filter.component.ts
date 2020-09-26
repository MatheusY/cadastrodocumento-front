import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Perfil } from 'app/shared/components/models';

@Component({
    selector: 'usuario-filter',
    templateUrl: './usuario-filter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioFilterComponent {
    @Input() perfis: Perfil[] = [];

    @Output() enter = new EventEmitter<any>();

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder, 
        private activatedRoute: ActivatedRoute,
    ){
        this.form = this.formBuilder.group({
            usuario: [null],
            email: [null],
            perfil: [null],
        });
    }

    onEnter(event: any): void{
        if(event.keyCode === 13){
            this.enter.emit(event);
        }
    }

}