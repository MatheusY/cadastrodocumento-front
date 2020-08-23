import { ButtonOptions } from '../../interfaces';

export class CustomButtonThemes {
    static RESET: ButtonOptions = {
        type: 'button',
        text: 'Limpar',
        icon: { fontIcon: 'pi pi-trash', position: 'left'},
        active: false,
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
        reset: CustomButtonThemes.RESET,
        search: CustomButtonThemes.SEARCH,
        
    }

    static forName(name: string): CustomButtonThemes{
        return this.names[name];
    }
}