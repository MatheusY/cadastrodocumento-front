import { AbstractModel } from './abstract.model';

export class Perfil extends AbstractModel<string> {
    static ADMIN: Perfil = {
        id: 'ADMIN',
        descricao: 'Admin',
    }
    static EDITOR: Perfil = {
        id: 'EDITOR',
        descricao: 'Editor',
    }
    static VISUALIZADOR: Perfil = {
        id: 'VISUALIZADOR',
        descricao: 'Visualizador',
    }

    descricao?: string;
}