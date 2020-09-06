import { OnInit, Component, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { MenuItem } from 'primeng/primeng';


@Component({
    selector: 'component-column-menu',
    templateUrl: './column-menu.component.html',
    styleUrls: ['./column-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TableColumnMenuComponent<E> implements OnInit {
    @Input() header: string;

    @Output() edit = new EventEmitter<E>();
    @Output() remove = new EventEmitter<E>();

    @ViewChild('columnMenuTemplate', { static: true }) template: TemplateRef<any>;
    
    items: MenuItem[];
    row: E;
    confirmDelete: boolean;

    ngOnInit(): void {
        this.items = [
            { 
                id: 'editar', 
                label: 'Editar', 
                icon: 'pi pi-pencil', 
                visible: this.showEdit(), 
                command: () => this.onEdit(),
            },
            {
                id: 'remover',
                label: 'Remover',
                icon: 'pi pi-times',
                visible: this.showRemove(),
                command: () => this.onRemove(),
            }
        ]
    }

    onDropdownClick(row: E): void {
        this.row = row;
    }

    onEdit(): void {
        this.edit.emit(this.row);
    }

    onRemove(): void {
        this.confirmDelete = true;
    }

    showEdit(): boolean {
        return this.edit.observers.length > 0;
    }

    showRemove(): boolean {
        return this.remove.observers.length > 0;
    }

    onNoDelete(): void {
        this.confirmDelete = false;
    }

    onYesDelete(): void {
        this.confirmDelete = false;
        this.remove.emit(this.row);
    }
}