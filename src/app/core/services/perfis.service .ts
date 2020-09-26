import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Perfil } from 'app/shared/components/models';

@Injectable({
    providedIn: 'root'
})
export class PerfissService extends AbstractService<Perfil, number> {
    constructor(protected http: HttpClient){
        super(`${AbstractService.baseUrl}/perfil`, http)
    }
}
