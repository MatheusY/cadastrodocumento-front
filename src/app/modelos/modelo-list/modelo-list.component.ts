import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloService } from '../modelo/modelo.service';
import { Modelo } from '../modelo/modelo.model';

@Component({
    selector: 'ap-modelo-list',
    templateUrl: './modelo-list.component.html'
})
export class ModeloListComponent implements OnInit {

    modelos: Modelo[];

    cols: any[];

    rows = 5;

    constructor(
        private activatedRoute: ActivatedRoute,
        private modeloService: ModeloService
    ){}

    ngOnInit(): void {
         this.modeloService.list(5, 0).subscribe(modelos => this.modelos = modelos);

         this.cols = [
            { field: 'tipoDocumento', header: 'Tipo de documento' },
            { field: 'ano', header: 'Ano' },
            { field: 'uf', header: 'Estado' }
        ];
    }
}