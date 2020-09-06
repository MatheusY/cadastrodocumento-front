import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';

const url = `${AbstractService.baseUrl}/imagem/`;
@Injectable({
    providedIn: 'root',
})
export class ImagensService {

    constructor(protected http: HttpClient) {
        
    }

    create(arquivo: File, id: number): Observable<Object>{
        const formData = new FormData();
        formData.append('imagem', arquivo);
        return this.http.post(url + id, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
}
