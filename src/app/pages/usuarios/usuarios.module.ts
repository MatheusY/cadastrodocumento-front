import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'app/shared/components/components.module';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { UsuarioFormViewComponent } from './shared/usuario-form-view/usuario-form-view.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuarioFormComponent } from './shared/usuario-form/usuario-form.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

@NgModule({
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule,
        UsuariosRoutingModule,
    ],
    declarations: [
        UsuarioEditComponent,
        UsuarioFormComponent,
        UsuarioFormViewComponent,
        UsuarioViewComponent,
    ]
})
export class UsuariosModule {}