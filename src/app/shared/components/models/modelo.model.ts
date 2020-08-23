import { AbstractModel } from './abstract.model';
import { Uf } from './uf.models';
import { TipoDocumento } from './tipo-documento.model';

export class Modelo extends AbstractModel<number> {
    ano:number;
    uf:Uf;
    tipoDocumento:TipoDocumento;
    documento:string;
}