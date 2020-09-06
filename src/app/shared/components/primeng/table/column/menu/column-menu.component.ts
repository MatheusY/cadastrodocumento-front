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

    ngOnInit(): void {
        this.items = [
            { 
                id: 'editar', 
                label: 'Editar', 
                icon: 'pi pi-pencil', 
                visible: this.showEdit(), 
                command: () => this.onEdit(),
            }
        ]
    }

    onDropdownClick(row: E): void {
        this.row = row;
    }

    onEdit(): void {
        this.edit.emit(this.row);
    }

    showEdit(): boolean {
        return this.edit.observers.length > 0;
    }

    showRemove(): boolean {
        return this.remove.observers.length > 0;
    }
}