export abstract class MessagesService {
    static CREATED_RECORD =  'Registro criado com sucesso';
    static DELETED_RECORD = 'Registro excluído com sucesso';
    static UPDATED_RECORD = 'Registro atualizado com sucesso';
    static INVALID_FORM = 'Formulário possui campos inválidos';

    success: (detail: string) => void;

    info: (detail: string) => void;

    warn: (detail: string) => void;

    error: (detail: string) => void;
}