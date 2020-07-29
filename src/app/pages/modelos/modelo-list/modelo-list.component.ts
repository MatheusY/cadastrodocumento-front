import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelosService } from 'app/core/services';
import { Observable } from 'rxjs';
import { Modelo } from 'app/shared/components/models';
import { PageListComponent } from 'app/shared/components/page/page-list.component';

@Component({
    selector: 'ap-modelo-list',
    templateUrl: './modelo-list.component.html'
})
export class ModeloListComponent extends PageListComponent<Modelo, number> implements OnInit {

    modelos: Observable<Modelo[]>;

    cols: any[];

    rows = 5;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected modeloService: ModelosService
    ){
        super(router, activatedRoute, modeloService);
    }

    ngOnInit(): void {
        this.dataSource.connect().subscribe(modelo => console.log(modelo));
        this.cols = [
            { field: 'tipoDocumento', header: 'Tipo de documento' },
            { field: 'ano', header: 'Ano' },
            { field: 'uf', header: 'Estado' }
         ];
    }
}