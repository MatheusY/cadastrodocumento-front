import { AbstractModel, Pageable } from 'app/shared/components/models';
import { AfterContentInit, Component, ViewEncapsulation, ContentChild, QueryList, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { TableColumnComponent } from './column/column.component';
import { MsTableDataSource } from 'app/shared/components/table/table.data-source';

@Component({
    selector: 'component-table',
    templateUrl: './table.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TableComponent<E extends AbstractModel<ID>, ID> implements AfterContentInit {
    @ContentChildren(TableColumnComponent, { descendants: true }) columns: QueryList<TableColumnComponent>;

    @Input() id: string;
    @Input() title: string;
    @Input() dataSource: MsTableDataSource<E, ID>;

    @Output() selectedChanged = new EventEmitter<E[]>();
    @Output() pageChanged = new EventEmitter<Pageable>();

    columnNames: string[] = [];

    ngAfterContentInit(): void {
        this.columns.forEach(column => {
            this.columnNames.push(column.header);
        });
        console.log(this.dataSource.pageable);
    }

    onPageChanged(event: any): void {
        const pageNumber = event.first / event.rows + 1;
        this.pageChanged.emit(new Pageable(pageNumber, event.rows));
    }


}