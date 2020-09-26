import { ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

import { Observable, of, Subject } from 'rxjs';
import { MsTableDataSource } from '../table/table.data-source';
import { AbstractModel, Pageable } from 'app/shared/components/models';
import { AbstractService, MessagesService } from 'app/core/services';
import { takeUntil } from 'rxjs/operators';

export abstract class PageListComponent<E extends AbstractModel<ID>, ID> implements AfterViewInit, OnInit, OnDestroy {
    @ViewChild('filterForm', { static: true }) filterForm: any;

    modelParent: any;
    modelParent$: Observable<any>;
    dataSource: MsTableDataSource<E, ID>;

    protected unsubscribeAll = new Subject<any>();

    protected pageable: Pageable;
    private queryParams: { [key: string]: any};

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
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
            } else if (this.activatedRoute.snapshot.queryParamMap) {
                const { page, size } = this.activatedRoute.snapshot.queryParams;

                this.pageable = new Pageable(page, size);
                if (this.filterForm) {
                    this.filterForm.form.patchValue({
                        ...this.activatedRoute.snapshot.queryParams,
                    });
                }
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

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    onPageChanged(pageable: Pageable): void {
        this.pageable = pageable;
        this.search();
    }

    onAdd(event: Event): void {
        this.navigateToForm(['..', 'adicionar']);
    }

    onEdit(model: E): void {
        this.navigateToForm(['..', model.id, 'editar']);
    }

    onRemove(model: E): void {
        this.serviceImpl
            .delete(model.id)
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(
                () => {
                    this.messagesService.success(MessagesService.DELETED_RECORD);
                    this.search();
                },
                (response: HttpErrorResponse) => {
                    this.messagesService.error(response.error.message);
                },
            );
    }

    onRefresh(): void {
        this.search();
      }

    onReset(even?: any): void {
        this.filterForm.form.reset();
        this.dataSource.clear();
        this.router.navigate([],{});
        this.pageable = new Pageable();

        this.search();

    }

    onSearch(event?: any): void {
        this.pageable = new Pageable();
        this.search();
    }

    get searchParams(): {[param: string]: string} {
        let params = this.filterForm ? this.filterForm.form.value : {};
        this.filterForm.form.value;
        return pickBy(params, identity);
    }

    private navigateToForm(commands: any[]): void {
        this.router.navigate(commands, {
            relativeTo: this.activatedRoute,
            state: {
                queryParams: {
                    ...this.searchParams,
                    page: this.pageable.pageNumber,
                    size: this.pageable.pageSize,
                }
            }
        })
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