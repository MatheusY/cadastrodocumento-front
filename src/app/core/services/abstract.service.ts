import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';
import { AbstractModel, PageImpl } from 'app/shared/components/models';
import { Page } from 'app/shared/types/page.type';
import { environment } from 'environments/environment';
import { EventEmitter } from 'protractor';
import { destroyPlatform } from '@angular/core';

const prepareQueryRequest = (httpParams: HttpParams): HttpParams => {
    if(httpParams){
        const page = httpParams.get('page');
        const size = httpParams.get('size');
        
        const newPage = page && Number(page) > 0 ? Number(page) - 1 : page;
        httpParams = httpParams.set('page', String(newPage)).set('size', size);
    }
    return httpParams;
}

const prepareQueryResponse = <E extends AbstractModel<ID>, ID>(response: HttpResponse<any>): Page<E> => {
    const count = Number(response.headers.get('X-Total-Count')) || response.body.totalElements;
    const data: E[] = (response.body && response.body.content) || response.body;

    return PageImpl.of(data, count);
}

export const query = <E extends AbstractModel<ID>, ID>
    (http: HttpClient, endPoint: string, httpParams: HttpParams): Observable<Page<E>> => {
        return http
            .get<Page<E>>(endPoint, {
                params: prepareQueryRequest(httpParams),
                observe: 'response'
            })
            .pipe(map((response: HttpResponse<any>) => prepareQueryResponse<E, ID>(response)));
    };

export const findById = <E extends AbstractModel<ID>, ID>
    (http: HttpClient, endpoint: string, id: ID): Observable<E> => {
        let url = `${endpoint}/${id}`;
        
        return http.get<E>(url);
    };

export const listAll = <E extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string): Observable<E[]> => {
    return http.get<E[]>(endpoint);
    };


export const create = <E extends AbstractModel<ID>, ID>(
    http: HttpClient,
    endPoint: string,
    model: E,
    ): Observable<number> => {
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=utf-8'
        });

        return http.post<number>(endPoint, model, { headers });
    };

export const update = <E extends AbstractModel<ID>, ID>(
    http: HttpClient,
    endpoint: string,
    model: E,
    ):Observable<number> => {
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=utf-8'
        });

        let url = model.id ? `${endpoint}/${model.id}` : endpoint;
        
        return http.put<number>(url, model, { headers });
    };

export const destroy = <ID>(http: HttpClient, endPoint: string, id: ID): Observable<void> => {
    let url = `${endPoint}/${id}`;
    return http.delete<void>(url);
};


export abstract class AbstractService<E extends AbstractModel<ID>, ID> implements Resolve<E> {
    static baseUrl:string = environment.ApiUrl;

    constructor(protected endpoint: string, protected http: HttpClient){}

    findById(id: ID): Observable<E>{
        return findById(this.http, this.endpoint, id);
    }
    
    query(httpParams: HttpParams): Observable<Page<E>>{
        return query(this.http, this.endpoint, httpParams);
    }

    listAll(): Observable<E[]> {
        return listAll(this.http, `${this.endpoint}/all`);
    }

    save(model: E): Observable<number> {
        return model.id ? this.update(model) : this.insert(model);
    }

    insert(model: E): Observable<number> {
        return create(this.http, this.endpoint, model);
    }

    update(model: E): Observable<number> {
        return update(this.http, this.endpoint, model);
    }

    delete(id: ID): Observable<void> {
        return destroy(this.http, this.endpoint, id);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<E>  {
        const id: any = route.paramMap.get('id');

        return this.findById(id as ID).pipe(
            filter((model: E) => !!model),
            take(1)
        );
    }

}