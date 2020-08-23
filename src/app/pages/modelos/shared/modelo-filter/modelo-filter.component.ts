import { Input, Output, EventEmitter, Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TipoDocumento, Uf } from 'app/shared/components/models';

@Component({
    selector: 'modelo-filter',
    templateUrl: './modelo-filter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeloFilterComponent {
    @Input() tipos: TipoDocumento[] = [];
    @Input() ufs: Uf[] = [];

    @Output() enter = new EventEmitter<any>();

    form: FormGroup;

    constructor(public formBuilder: FormBuilder, public activatedRoute: ActivatedRoute){
        this.form = this.formBuilder.group({
            tipoDocumento: [null],
            uf: [null],
            ano: [null],
        });
        
    }

    onEnter(event: any): void {
        if(event.keyCode === 13) {
            this.enter.emit(event);
        }
    }
}