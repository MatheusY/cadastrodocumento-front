import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
    
const CLOUD = environment.ApiUrl;

@Component({
    selector: 'ap-modelo',
    templateUrl: 'modelo.component.html'
})
export class ModeloComponent {

    private _documento = '';

}