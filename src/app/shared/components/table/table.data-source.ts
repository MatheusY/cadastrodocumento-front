import { DataSource } from '@angular/cdk/table';
import { AbstractModel } from '../models';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Pageable } from '../models/pageable.model';
import { AbstractService } from 'app/core/services/abstract.service';
import { HttpParams } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Page } from '../../types/page.type';

export class MsTableDataSource<E extends AbstractModel<ID>, ID> extends DataSource<E>{
    loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ = this.loadingSubject.asObservable();

    pageable = new Pageable();
    total: number;
    data: E[];

    private pageSubject = new BehaviorSubject<E[]>([]);

    constructor(protected service: AbstractService<E, ID>, private _httpParams: HttpParams = new HttpParams()){
        super();
    }
    
    connect(): Observable<E[]> {
        return this.pageSubject.asObservable();
    }
    disconnect(): void {
        this.pageSubject.complete();
        this.loadingSubject.complete();
    }

    load(params?: HttpParams | Pageable): void {
        this.loadingSubject.next(true);

        if(params && params instanceof Pageable){
            this.httpParams = this.toHttpParams(params);
        } else if(params instanceof HttpParams){
            this.httpParams = params;
        }

        if(this.httpParams.has('page') && this.httpParams.has('size')){
            this.pageable = this.toPageable(this.httpParams);
        }

        this.service
            .query(this.httpParams)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((page: Page<E>) => {
                this.total = page.count;
                this.data = page.data;

                return this.pageSubject.next(page.data);
            });
    }

    clear(): void {
        this.total = 0;
        this.data = [];
        this.loadingSubject.next(true);
        this.pageSubject.next([]);
        this.loadingSubject.next(false);
    }

    onPageChanged(pageable: Pageable): void {
        this.load(this.toHttpParams(pageable));
    }

    set httpParams(params: HttpParams) {
        if(params){
            this._httpParams = new HttpParams();

            for(const key of params.keys()){
                this._httpParams = this._httpParams.set(key, params.get(key));
            }
        }
    }

    get httpParams() {
        return this._httpParams;
    }

    private toHttpParams(pageable: Pageable): HttpParams {
        return new HttpParams({
            fromObject: {
                size: String(pageable.pageSize),
                page: String(pageable.pageNumber)
            }
        });
    }

    private toPageable(httpParams: HttpParams): Pageable {
        return new Pageable(Number(httpParams.get('page')), Number(httpParams.get('size')));
      }
}