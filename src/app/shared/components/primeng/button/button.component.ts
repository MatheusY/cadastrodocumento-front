import { Component, ViewEncapsulation, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { ButtonOptions } from '../../interfaces';
import { CustomButtonThemes } from './button.theme';

@Component({
    selector: 'component-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CustomButtonComponent {
    @Input() options: ButtonOptions;
    
    @Output() btnClick = new EventEmitter<MouseEvent>();

      constructor() {
        this.options = {
            type: 'button',
            text: undefined,
            icon: { fontIcon: undefined, position: undefined },
            active: false,
            disabled: false,
            styleClass: 'ml-8',
          }
      }
    

    @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
        if (!this.disabled && !this.loading) {
            this.btnClick.emit(event);
        }
    }
    
    @Input('text') set text(value: string) {
        this.options.text = value;
    }
    
    @Input('icon') set icon(value: string) {
        this.options.icon = { fontIcon: value, position: 'left' };
    }
    
    @Input('styleClass') set styleClass(value: string) {
        this.options.styleClass = value;
    }
    
    @Input('loading') set loading(value: boolean) {
        this.options.active = value;
    }
    
    get loading(): boolean {
        return this.options.active;
    }

    @Input('loadingType')
    set loadingType(value: string) {
        this.options.loadingType = value;
    }

    @Input('loadingText')
    set loadingText(value: string) {
        this.options.loadingText = value;
    }

    @Input('disabled')
    set disabled(value: boolean) {
        this.options.disabled = value;
    }

    @Input('theme')
    set theme(value: string){ 
        const buttonTheme = CustomButtonThemes.forName(value);

        if(buttonTheme){
            Object.assign(this.options, buttonTheme);
        }
    }

    isProgressSpinner(): boolean {
        return this.options.loadingType === 'spinner'
    }

}