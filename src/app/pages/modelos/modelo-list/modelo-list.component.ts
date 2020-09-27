import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ModelosService, TiposDocumentosService, UfsService, MessagesService, UserService } from 'app/core/services';
import { Modelo, Uf, TipoDocumento } from 'app/shared/components/models';
import { PageListComponent } from 'app/shared/components/page/page-list.component';

@Component({
    selector: 'ap-modelo-list',
    templateUrl: './modelo-list.component.html'
})
export class ModeloListComponent extends PageListComponent<Modelo, number> implements OnInit {

    modelos: Observable<Modelo[]>;
    displayImage = false;
    urlImage: Observable<string>;

    ufs$: Observable<Uf[]>;
    tiposDocumentos$: Observable<TipoDocumento[]>

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        protected modeloService: ModelosService,
        protected tipoDocumentoService: TiposDocumentosService,
        protected ufService: UfsService,
        protected usuarioService: UserService,
    ){
        super(router, activatedRoute, messagesService, modeloService, usuarioService);
        this.ufs$ = ufService.listAll();
        this.tiposDocumentos$ = tipoDocumentoService.listAll();
    }

    onViewImage(data: Modelo){
        this.modeloService.findById(data.id).subscribe(m => {
            this.urlImage = of(m.documento);
            this.displayImage = true;
        });
    }

}