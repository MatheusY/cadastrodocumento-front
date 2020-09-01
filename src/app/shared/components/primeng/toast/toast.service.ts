import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/primeng';

import { MessagesService } from '../../api/message.service';
import { ToastOptions } from './toast-options.interface';

@Injectable({
    providedIn: 'root',
})
export class CustomToastService implements MessagesService {
    constructor(private messageService: MessageService){}
    
    add(options: ToastOptions): void {
        if (options) {
            this.messageService.add(options);
        }
    }

    success(detail: string): void{
        this.add({ severity: 'success', summary: 'Sucesso', detail });
    }

    info (detail: string): void{
        this.add({ severity: 'info', summary: 'Informativo', detail});
    }

    warn(detail: string): void{
        this.add({ severity: 'warn', summary: 'Atenção', detail});
    }

    error(detail: string): void{
        this.add({ severity: 'error', summary: 'Erro', detail});
    }

}