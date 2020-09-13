import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'app/shared/components/components.module';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { UsuarioFormViewComponent } from './shared/usuario-form-view/usuario-form-view.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule,
        UsuariosRoutingModule,
    ],
    declarations: [
        UsuarioFormViewComponent,
        UsuarioViewComponent,
    ]
})
export class UsuariosModule {}