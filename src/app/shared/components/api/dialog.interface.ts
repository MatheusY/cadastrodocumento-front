interface DialogIcon {
    color?: string;
    fontIcon?: string;
    fontSet?: string;
    inline?: boolean;
    svgIcon?: string;
    style?: string;
}

export interface ConfirmDialogOptions {
    description?: string;
    question?: string;
    icon?: DialogIcon;
    styleClass?: string;
}

export const DELETE_CONFIRM_OPTIONS = {
    description: 'Esta ação não poderá ser desfeita após confirmação',
    question: 'Deseja realmente excluir?',
    icon: { fontIcon: 'pi pi-trash', color: 'text-danger' },
    styleClass: 'ui-button-primary ml-8',
}