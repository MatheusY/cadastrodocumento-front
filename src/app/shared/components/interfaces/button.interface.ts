export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'warning' | 'info';

export interface ButtonIcon {
    color?: string;
    fontIcon?: string;
    fontSet?: string;
    inline?: boolean;
    styleClass?: string;
    position?: string;
  }

export interface ButtonOptions {
    active: boolean;
    text: string;
    type?: string;
    icon?: ButtonIcon;
    color?: ButtonColor;
    value?: number;
    fullWidth?: boolean;
    disabled?: boolean;
    styleClass?: string;
    loadingType?: string;
    loadingText?: string;
    loadingColor?: ButtonColor;
    spinnerSize?: number;
    spinnerIcon?: ButtonIcon;
  }