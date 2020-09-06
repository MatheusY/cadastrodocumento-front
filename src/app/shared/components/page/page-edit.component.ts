import { AbstractModel } from '../models';
import { FormSubmit } from '../api/form-submit.service';
import { OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractService, MessagesService } from 'app/core/services';

export abstract class PageEditComponent<E extends AbstractModel<ID>, ID> extends FormSubmit<E, ID> implements OnDestroy, OnInit {
    @ViewChild('modelForm', { static: false }) modelForm: any;

    protected previousQueryParams: { [param: string]: any};
    
    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        protected modelsService: AbstractService<E, ID>,
    ){
        super(router, activatedRoute, messagesService, modelsService);
        this.previousQueryParams = window.history.state.queryParams;
    }

    ngOnInit(): void {
        this.init();
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    onSave(event: Event): void {
        return this.update(this.modelForm.form, () => {
            this.navigateToList();
            this.messageService.success(MessagesService.UPDATED_RECORD);
        });
    }

    onCancel(event: Event): void {
        this.navigateToList();
    }
    
    protected navigateToList(): void {
        this.router.navigate(['../../'], {
            relativeTo: this.activatedRoute,
            queryParams: { ...this.previousQueryParams },
            queryParamsHandling: 'preserve',
        });
    }
}