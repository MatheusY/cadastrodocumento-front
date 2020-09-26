import { AbstractModel } from './abstract.model';
import { Perfil } from './perfil.model';

export class User extends AbstractModel<number>{
    usuario?: string;
    email?: string;
    perfil?: Perfil;
    senha?: string;
    novaSenha?: string;
}