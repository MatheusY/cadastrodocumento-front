import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PageNewComponent } from 'app/shared/components/page';
import { Modelo, Uf, TipoDocumento } from 'app/shared/components/models';
import { ModelosService, UfsService, TiposDocumentosService, ImagensService, MessagesService } from 'app/core/services';

@Component({
    selector: 'modelo-new',
    templateUrl: './modelo-new.component.html',
})
export class ModeloNewComponent extends PageNewComponent<Modelo, number> {

    ufs$: Observable<Uf[]>;
    tiposDocumentos$: Observable<TipoDocumento[]>;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        protected modelosService: ModelosService,
        private ufService: UfsService,
        private tipoDocumentoService: TiposDocumentosService,
        private imagensService: ImagensService,
    ){
        super(router, activatedRoute, messagesService, modelosService);
        this.ufs$ = this.ufService.listAll();
        this.tiposDocumentos$ = this.tipoDocumentoService.listAll();
    }

    onSave(event: Event): void{
        const documento = this.modelForm.form.get('documento').value;
        this.create(this.modelForm.form, (modelo: number) => {
            this.imagensService.create(documento, modelo)
                .subscribe(() => this.navigateToList());
        });
        
    }
}