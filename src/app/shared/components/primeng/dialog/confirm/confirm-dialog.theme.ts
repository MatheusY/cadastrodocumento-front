import { ConfirmDialogOptions } from 'app/shared/components/api/dialog.interface';


export class ConfirmDialogThemes {
    static DELETE: ConfirmDialogOptions = {
        description: 'Esta ação não poderá ser desfeita após confirmação.',
        question: 'Deseja realmente excluir?',
        icon: { fontIcon: 'pi pi-trash', color: 'text-danger' },
        styleClass: 'ui-button-primary ml-8',
    };

    private static names = {
        delete: ConfirmDialogThemes.DELETE,
    };

    static forName(name: string): ConfirmDialogOptions {
        return this.names[name];
    }
}