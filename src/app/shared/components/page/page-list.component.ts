import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MsTableDataSource } from '../table/table.data-source';
import { AbstractModel, Pageable } from 'app/shared/components/models';

export abstract class MsPageListComponent<E extends AbstractModel<ID>, ID> {
    @ViewChild('filterForm', { static: true }) filterForm: any;

    modelParent: any;
    modelParent$: Observable<any>;
    dataSource: MsTableDataSource<E, ID>;

    private pageable: Pageable;
}