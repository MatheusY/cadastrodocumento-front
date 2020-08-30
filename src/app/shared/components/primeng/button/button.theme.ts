import { ButtonOptions } from '../../interfaces';

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
        styleClass: 'clean',
        active: false,

    }

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

    private static names = {
        add: CustomButtonThemes.ADD,
        cancel: CustomButtonThemes.CANCEL,
        reset: CustomButtonThemes.RESET,
        save: CustomButtonThemes.SAVE,
        search: CustomButtonThemes.SEARCH,
        
    }

    static forName(name: string): CustomButtonThemes{
        return this.names[name];
    }
}