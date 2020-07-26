import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Modelo } from 'app/shared/components/models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModelosService extends AbstractService<Modelo, number> {
    
    constructor(protected http: HttpClient){
        super(`${AbstractService.baseUrl}/modelo`, http);
    }
}