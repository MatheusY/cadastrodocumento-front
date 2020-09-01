import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/primeng';

import { CustomToastComponent } from './toast.component';

@NgModule({
    imports: [CommonModule, ToastModule],
    declarations: [CustomToastComponent],
    exports: [CustomToastComponent],
    providers: [MessageService]
})
export class CustomToastModule {}