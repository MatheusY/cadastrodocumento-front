import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelosService } from 'app/core/services';
import { Observable } from 'rxjs';
import { Modelo } from 'app/shared/components/models';

@Component({
    selector: 'ap-modelo-list',
    templateUrl: './modelo-list.component.html'
})
export class ModeloListComponent implements OnInit {

    modelos: Observable<Modelo[]>;

    cols: any[];

    rows = 5;

    constructor(
        private activatedRoute: ActivatedRoute,
        private modeloService: ModelosService
    ){}

    ngOnInit(): void {
        //  this.modelos = this.modeloService.list(5, 0);
        console.log(this.activatedRoute);
         this.cols = [
            { field: 'tipoDocumento', header: 'Tipo de documento' },
            { field: 'ano', header: 'Ano' },
            { field: 'uf', header: 'Estado' }
        ];
    }
}