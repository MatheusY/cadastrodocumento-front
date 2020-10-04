import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'app/shared/components/components.module';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { UsuarioFormViewComponent } from './shared/usuario-form-view/usuario-form-view.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuarioFormComponent } from './shared/usuario-form/usuario-form.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { SenhaEditComponent } from './senha-edit/senha-edit.component';
import { SenhaFormComponent } from './shared/senha-form/senha-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioTableComponent } from './shared/usuario-table/usuario-table.component';
import { UsuarioFilterComponent } from './shared/usuario-filter/usuario-filter.component';
import { UsuarioValidateComponent } from './usuario-validate/usuario-validate.component';
import { CheckboxModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CheckboxModule,
        CommonModule,
        SharedComponentsModule,
        RouterModule,
        UsuariosRoutingModule,
    ],
    declarations: [
        SenhaEditComponent,
        SenhaFormComponent,
        UsuarioEditComponent,
        UsuarioListComponent,
        UsuarioFilterComponent,
        UsuarioFormComponent,
        UsuarioFormViewComponent,
        UsuarioTableComponent,
        UsuarioValidateComponent,
        UsuarioViewComponent,
    ]
})
export class UsuariosModule {}