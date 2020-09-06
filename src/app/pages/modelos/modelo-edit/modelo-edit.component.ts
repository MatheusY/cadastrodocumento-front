import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEditComponent } from 'app/shared/components/page/page-edit.component';
import { Modelo, Uf, TipoDocumento } from 'app/shared/components/models';
import { MessagesService, UfsService, TiposDocumentosService, ModelosService, ImagensService } from 'app/core/services';

@Component({
    selector: 'modelo-eidt',
    templateUrl: './modelo-edit.component.html',
})
export class ModeloEditComponent extends PageEditComponent<Modelo, number>{
    
    ufs$: Observable<Uf[]>;
    tiposDocumentos$: Observable<TipoDocumento[]>;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        private modeloService: ModelosService,
        private imagensService: ImagensService,
        private ufService: UfsService,
        private tipoDocumentoService: TiposDocumentosService,
    ){
        super(router, activatedRoute, messagesService, modeloService);
        this.ufs$ = this.ufService.listAll();
        this.tiposDocumentos$ = this.tipoDocumentoService.listAll();
    }

    onSave(event: Event): void{
        const documento = this.modelForm.form.get('documento').value;
        this.update(this.modelForm.form, (modelo: number) => {
            this.imagensService.create(documento, this.model.id)
                .subscribe(() => this.navigateToList());
        });
        
    }

}