import { ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { MsTableDataSource } from '../table/table.data-source';
import { AbstractModel, Pageable } from 'app/shared/components/models';
import { AbstractService } from 'app/core/services';

export abstract class PageListComponent<E extends AbstractModel<ID>, ID> implements AfterViewInit, OnInit {
    @ViewChild('filterForm', { static: true }) filterForm: any;

    modelParent: any;
    modelParent$: Observable<any>;
    dataSource: MsTableDataSource<E, ID>;

    private pageable: Pageable;
    private queryParams: { [key: string]: any};

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected serviceImpl: AbstractService<E, ID>,
    ){
        this.dataSource = new MsTableDataSource(serviceImpl);
        this.pageable = new Pageable();
        this.queryParams = this.router.getCurrentNavigation()
            ? this.router.getCurrentNavigation().extras.queryParams
            : null;
    }
    
    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.queryParams) {
                const { page, size } = this.queryParams;
                this.pageable = new Pageable(page, size);
    
                this.filterForm.form.patchValue({
                    ...this.queryParams
                })
            }
    
            this.search();
        });
    }

    ngOnInit(): void {
        if(this.activatedRoute.parent) {
            this.activatedRoute.parent.data.subscribe(response => {
                if(response.model){
                    this.modelParent = response.model;
                    this.modelParent$ = of(this.modelParent);
                }
            })
        }
    }

    onPageChanged(pageable: Pageable): void {
        this.pageable = pageable;
        this.search();
    }

    get searchParams(): {[param: string]: string} {
        let params = this.filterForm ? this.filterForm.form.value : {};
        
        return params;
    }

    private search(): void {
        const httpParams = new HttpParams({
            fromObject: {
                ...this.searchParams,
                page: String(this.pageable.pageNumber),
                size: String(this.pageable.pageSize),
            }
        });

        const navigationExtras: NavigationExtras = {
            relativeTo: this.activatedRoute,
            replaceUrl: true,
            queryParams: {
                ...this.searchParams,
                page: this.pageable.pageNumber,
                size: this.pageable.pageSize
            }
        };

        this.router.navigate([], navigationExtras);

        this.dataSource.load(httpParams);
    }

}