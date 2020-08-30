import { Component, ViewChild, Input, HostListener } from '@angular/core';
import { Uf, TipoDocumento, Modelo } from 'app/shared/components/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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


    onFileDropped(event){
        const reader = new FileReader();
        reader.readAsDataURL(event);
        reader.onload = () => this._url = reader.result;
        //this._url = URL.createObjectURL(file);
        this.form.get('documento').setValue(event);
    }

    sanitize(){
        if(this._url){
            return this.sanitizer.bypassSecurityTrustUrl(this._url);
        }
        return "/assets/img/upload-icone.png";
    }

}