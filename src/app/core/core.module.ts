import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { AlertModule } from '../shared/components/alert/alert.module'
import { MenuModule } from '../shared/components/menu/menu.module'
import { LoadingModule } from '../shared/components/loading/loading.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { AuthService } from './services';

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        AlertModule,
        LoadingModule,
        MenuModule,
        ButtonModule,
        SidebarModule,
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }