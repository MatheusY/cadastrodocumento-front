import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ObjectInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const novaReq = req.clone({
            params: this.handleHttpParamsWithObject(req.params)
        });
        return next.handle(
            novaReq
        );
    }

    handleHttpParamsWithObject(params?: HttpParams): HttpParams {
        if (params === null || params === undefined) {
            return params;
        }

        let value: any;

        for (const key of params.keys()) {
            value = params.get(key);

            if (typeof value === 'object' && value && value.id) {
                params = params.delete(key).set(key, value.id);
            }
        }

        return params;
    }

}