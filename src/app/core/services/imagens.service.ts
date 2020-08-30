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
        return this.http.post(url + id, arquivo, {
            reportProgress: true,
            observe: 'events'
        });
    }
}
