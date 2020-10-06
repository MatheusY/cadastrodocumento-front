import { ButtonOptions } from '../../interfaces';
import { CustomButtonModule } from './button.module';

export class CustomButtonThemes {
    static ADD: ButtonOptions = {
        type: 'button',
        text: 'Adicionar',
        icon: { fontIcon: 'pi pi-plus-circle', position: 'left'},
        active: false,
    };

    static CANCEL: ButtonOptions = {
        type: 'button',
        text: 'Cancelar',
        icon: { fontIcon: 'pi pi-ban', position: 'left'},
        styleClass: 'cancel-button',
        active: false,
    }

    static DELETE: ButtonOptions = {
        type: 'button',
        text: 'Confirmar exclusão',
        icon: { fontIcon: null, position: 'left' },
        styleClass: 'ui-button-danger ml-8',
        active: false,
    };

    static EDIT: ButtonOptions = {
        type: 'button',
        text: 'Editar',
        icon: {fontIcon: 'pi pi-pencil', position: 'left'},
        styleClass: 'primary-button',
        active: false,
    }

    static LOGIN: ButtonOptions = {
        type: 'button',
        text: 'Login',
        styleClass: 'primary-button',
        active: false,
        loadingText: 'Logando ...',
        loadingType: 'spinner',
    }

    static NO: ButtonOptions = {
        type: 'button',
        text: 'Não',
        icon: { fontIcon: null, position: 'left' },
        styleClass: 'ui-button-secondary ml-8',
        active: false,
    };

    static RESET: ButtonOptions = {
        type: 'button',
        text: 'Limpar',
        icon: { fontIcon: 'pi pi-trash', position: 'left'},
        active: false,
    };

    static SAVE: ButtonOptions = {
        type: 'submit',
        text: 'Salvar',
        icon: { fontIcon: 'pi pi-save', position: 'left'},
        styleClass: 'primary-button',
        active: false,
        loadingText: 'Salvando formulário...',
        loadingType: 'spinner',
    };

    static SEARCH: ButtonOptions = {
        type: 'submit',
        text: 'Pesquisar',
        icon: { fontIcon: 'pi pi-search', position: 'left'},
        active: false,
        loadingText: 'Buscando...',
        loadingType: 'spinner',
    };

    static YES: ButtonOptions = {
        type: 'button',
        text: 'Sim',
        icon: { fontIcon: null, position: 'left' },
        styleClass: 'primary-button ml-8',
        active: false,
      };

    private static names = {
        add: CustomButtonThemes.ADD,
        cancel: CustomButtonThemes.CANCEL,
        delete: CustomButtonThemes.DELETE,
        edit: CustomButtonThemes.EDIT,
        login: CustomButtonThemes.LOGIN,
        no: CustomButtonThemes.NO,
        reset: CustomButtonThemes.RESET,
        save: CustomButtonThemes.SAVE,
        search: CustomButtonThemes.SEARCH,
        yes: CustomButtonThemes.YES,
        
    }

    static forName(name: string): CustomButtonThemes{
        return this.names[name];
    }
}