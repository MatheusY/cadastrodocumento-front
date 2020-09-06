import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ModelosService, TiposDocumentosService, UfsService, MessagesService } from 'app/core/services';
import { Modelo, Uf, TipoDocumento } from 'app/shared/components/models';
import { PageListComponent } from 'app/shared/components/page/page-list.component';

@Component({
    selector: 'ap-modelo-list',
    templateUrl: './modelo-list.component.html'
})
export class ModeloListComponent extends PageListComponent<Modelo, number> implements OnInit {

    modelos: Observable<Modelo[]>;

    ufs$: Observable<Uf[]>;
    tiposDocumentos$: Observable<TipoDocumento[]>

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        protected modeloService: ModelosService,
        protected tipoDocumentoService: TiposDocumentosService,
        protected ufService: UfsService
    ){
        super(router, activatedRoute, messagesService, modeloService);
        this.ufs$ = ufService.listAll();
        this.tiposDocumentos$ = tipoDocumentoService.listAll();
    }

}