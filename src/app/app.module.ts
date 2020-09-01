import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ObjectInterceptor } from './core/interceptors';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesService } from './core/services';
import { CustomToastService } from 'app/shared/components/primeng/toast/toast.service';
import { SharedComponentsModule } from './shared/components/components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ObjectInterceptor,
      multi: true
    },
    {
      provide: MessagesService,
      useExisting: CustomToastService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
