import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset/reset.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Sign in'
                }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {
                    title: 'Cadastrar'
                }
            },
            {
                path: 'reset',
                component: ResetComponent,
                data: {
                    title: 'Esqueci minha senha'
                }
            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}