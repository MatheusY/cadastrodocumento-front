import { AbstractModel } from './abstract.model';

export class Modelo extends AbstractModel<number> {
    ano:number;
    uf:string;
    tipoDocumento:string;
    documento:string;
}