import { AbstractModel } from '../models';
import { FormSubmit } from '../api/form-submit.service';
import { OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractService, MessagesService } from 'app/core/services';

export abstract class PageNewComponent<E extends AbstractModel<ID>, ID> extends FormSubmit<E, ID> 
implements OnDestroy, OnInit {
    @ViewChild('modelForm', { static: false }) modelForm: any;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected messagesService: MessagesService,
        protected modelsService: AbstractService<E, ID>,
    ){
        super(router, activatedRoute, messagesService, modelsService);
    }

    ngOnInit(): void {
        this.init();
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    onSave(event: Event): void {
        return this.create(this.modelForm.form, () => {
            this.navigateToList();
        })
    }

    onCancel(event: Event): void {
        this.navigateToList();
    }

    protected navigateToList(): void {
        this.router.navigate(['../'], {
            relativeTo: this.activatedRoute,
        });
    }
}