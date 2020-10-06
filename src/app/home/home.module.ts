import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import {ButtonModule} from 'primeng/button';
import { SharedComponentsModule } from 'app/shared/components/components.module';
import { SignUpComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset/reset.component';
import { ResetFormComponent } from './reset/shared/reset-form/reset-form.component';

@NgModule({
    declarations: [
        ResetComponent,
        ResetFormComponent,
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        ReactiveFormsModule,
        RouterModule,
        SharedComponentsModule,
        VMessageModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }