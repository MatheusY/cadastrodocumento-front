import { TipoDocumento } from 'app/shared/components/models';
import { AbstractService } from './abstract.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TiposDocumentosService extends AbstractService<TipoDocumento, number> {
    constructor(protected http: HttpClient){
        super(`${AbstractService.baseUrl}/tipo-documento`, http)
    }
}
