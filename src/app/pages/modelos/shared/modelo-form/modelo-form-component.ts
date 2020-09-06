import { Component, ViewChild, Input, HostListener, OnInit, OnChanges } from '@angular/core';
import { Uf, TipoDocumento, Modelo } from 'app/shared/components/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

const IMAGEM_PREFIX = 'data:application/octet-stream;base64,'

@Component({
    selector: 'modelo-form',
    templateUrl: './modelo-form.component.html'    
})
export class ModeloFormComponent {
    @Input() ufs: Uf[] = [];
    @Input() tiposDocumentos: TipoDocumento[] = [];

    form: FormGroup;
    
    private _model: Modelo;

    private _url;
    url$ = new Observable<any>();

    constructor(
        public formBuilder: FormBuilder,
        private sanitizer: DomSanitizer){
        this.form = this.formBuilder.group({
            ano: [null, Validators.required],
            uf: [null, Validators.required],
            tipoDocumento: [null, Validators.required],
            documento: [null, Validators.required],
        });
    }

    @Input()
    set model(value: Modelo) {
        this._model = value;

        if(this._model) {
            this.form.patchValue({
                ...this._model,
            });
            this._url =  IMAGEM_PREFIX + this.model.documento;
            var blob = new Blob([this._model.documento], {type: 'image/png'});
            const file = new File([blob], 'modelo.png');
            this.form.get('documento').setValue(file);
        }
    }

    get model(): Modelo {
        return this._model;
    }

    onFileDropped(event){
        const reader = new FileReader();
        reader.readAsDataURL(event);
        reader.onload = () => this._url = reader.result;
        this.form.get('documento').setValue(event);
        
    }

    sanitize(){
        if (this._url){
            return this.sanitizer.bypassSecurityTrustUrl(this._url);
        }
        return '/assets/img/upload-icone.png';
    }

}