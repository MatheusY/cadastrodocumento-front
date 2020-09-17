import { AbstractModel } from './abstract.model';

export class User extends AbstractModel<number>{
    usuario: string;
    email: string;
    perfil: string;
}