import { Uf } from 'app/shared/components/models';
import { AbstractService } from './abstract.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UfsService extends AbstractService<Uf, number> {
    constructor(protected http: HttpClient){
        super(`${AbstractService.baseUrl}/uf`, http)
    }
}
