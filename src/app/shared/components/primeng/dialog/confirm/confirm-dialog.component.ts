import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { defaultsDeep } from 'lodash';
import { ConfirmDialogOptions } from '../../../api/dialog.interface';
import { ConfirmDialogThemes } from './confirm-dialog.theme';



@Component({
    selector: 'component-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CustomConfirmDialogComponent {
    @Input() options: ConfirmDialogOptions;
    @Input() themeYes = 'delete';
    @Input() themeNo = 'no';

    @Output() no = new EventEmitter<any>();
    @Output() yes = new EventEmitter<any>();

    private _visible: boolean;

    constructor() {
        this.options = {
            description: undefined,
            question: undefined,
            icon: { fontIcon: undefined, color: undefined },
            styleClass: undefined,
          };
    }

    onNo(event: Event): void {
        this._visible = false;
        this.no.emit(event);
    }

    onYes(event: Event): void {
        this.yes.emit(event);
    }

    @Input('description')
    set description(value: string){
        this.options.description = value;
    }

    @Input('question')
  set question(value: string) {
    this.options.question = value;
  }

  @Input('visible')
  set visible(value: boolean) {
    this._visible = value;
  }
  get visible(): boolean {
    return this._visible;
  }

  @Input('theme')
  set theme(value: string) {
    const dialogTheme = ConfirmDialogThemes.forName(value);

    if (dialogTheme) {
      defaultsDeep(this.options, dialogTheme);
    } else {
      console.warn(`No default theme for the dialog matches the [theme]="${value}" parameter passed.`);
    }
  }

}