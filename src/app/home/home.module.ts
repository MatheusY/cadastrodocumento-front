import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        SignInComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        VMessageModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }