import { AbstractModel, Pageable } from 'app/shared/components/models';
import { AfterContentInit, Component, ViewEncapsulation, ContentChild, QueryList, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { TableColumnComponent } from './column/column.component';
import { MsTableDataSource } from 'app/shared/components/table/table.data-source';
import { TableColumnMenuComponent } from './column/menu/column-menu.component';

@Component({
    selector: 'component-table',
    templateUrl: './table.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TableComponent<E extends AbstractModel<ID>, ID> implements AfterContentInit {
    @ContentChildren(TableColumnComponent, { descendants: true }) columns: QueryList<TableColumnComponent>;
    @ContentChild(TableColumnMenuComponent, { static: true }) columnMenu: TableColumnMenuComponent<E>;

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
    }

    onPageChanged(event: any): void {
        const pageNumber = event.first / event.rows + 1;
        this.pageChanged.emit(new Pageable(pageNumber, event.rows));
    }

    get first(): number {
        const { pageNumber, pageSize } = this.dataSource.pageable;
        return (pageNumber - 1) * pageSize;
    }


}