import { Input, Output, EventEmitter, Component } from '@angular/core';
import { MsTableDataSource } from 'app/shared/components/table/table.data-source';
import { Modelo, Pageable } from 'app/shared/components/models';

@Component({
    selector: 'modelo-table',
    templateUrl: './modelo-table.component.html'
})
export class ModeloTableComponent {
    @Input() dataSource: MsTableDataSource<Modelo, number>;

    @Output() pageChanged = new EventEmitter<Pageable>();

    onPageChanged(pageable: Pageable): void {
        this.pageChanged.emit(pageable);
    }
}