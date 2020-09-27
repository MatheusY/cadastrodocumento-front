import { Input, Output, EventEmitter, Component } from '@angular/core';
import { MsTableDataSource } from 'app/shared/components/table/table.data-source';
import { Modelo, Pageable } from 'app/shared/components/models';

@Component({
    selector: 'modelo-table',
    templateUrl: './modelo-table.component.html'
})
export class ModeloTableComponent {
    @Input() dataSource: MsTableDataSource<Modelo, number>;
    @Input() editor = true;

    @Output() edit = new EventEmitter<Modelo>();
    @Output() remove = new EventEmitter<Modelo>();
    @Output() pageChanged = new EventEmitter<Pageable>();
    @Output() viewImage = new EventEmitter<Modelo>();

    onPageChanged(pageable: Pageable): void {
        this.pageChanged.emit(pageable);
    }

    onEdit(data: Modelo): void {
        this.edit.emit(data);
    }

    onRemove(data: Modelo): void {
        this.remove.emit(data);
    }

    onViewImage(data: any): void {
        this.viewImage.emit(data);
    }
}