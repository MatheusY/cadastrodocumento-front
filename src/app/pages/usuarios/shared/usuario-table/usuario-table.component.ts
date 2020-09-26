import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MsTableDataSource } from 'app/shared/components/table/table.data-source';
import { User, Pageable } from 'app/shared/components/models';

@Component({
    selector: 'usuario-table',
    templateUrl: './usuario-table.component.html',
})
export class UsuarioTableComponent {

    @Input() dataSource: MsTableDataSource<User, number>;

    @Output() edit = new EventEmitter<User>();
    @Output() pageChanged = new EventEmitter<Pageable>();

    onPageChanged(pageable: Pageable): void {
        this.pageChanged.emit(pageable);
    }

    onEdit(data: User): void {
        this.edit.emit(data);
    }
}