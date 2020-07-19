import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Modelo } from './modelo.model';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class ModeloService {

    constructor(private http: HttpClient){ }

    list(size: number, page: number){
        return this.http
            .get<Modelo[]>(API + '/modelo?size=' + size.toString() + '&page=' + page.toString());
    } 
}