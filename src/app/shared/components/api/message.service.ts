export abstract class MessagesService {
    static CREATED_RECORD =  'Registro criado com sucesso';
    static DELETED_RECORD = 'Registro excluído com sucesso';
    static UPDATED_RECORD = 'Registro atualizado com sucesso';
    static INVALID_FORM = 'Formulário possui campos inválidos';
    static SERVER_ERROR = 'Ocorreu um erro durante o processamento da requisição no servidor! Tente novamente mais tarde'

    success: (detail: string, time?: number) => void;

    info: (detail: string) => void;

    warn: (detail: string) => void;

    error: (detail: string) => void;
}