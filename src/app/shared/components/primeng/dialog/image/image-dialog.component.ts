import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const IMAGEM_PREFIX = 'data:application/octet-stream;base64,'

@Component({
    selector: 'component-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrls: ['/image-dialog.component.scss']
})
export class CustomImageDialogComponent{

    @Output() displayChange = new EventEmitter<boolean>();

    url: string;
    visible;

    constructor(private sanitizer: DomSanitizer){}

    @Input('image')
    set image(value: string) {
        if (value){
            this.url = IMAGEM_PREFIX + value;
        }
    }

    @Input('display') 
    set display(value: boolean){
        this.visible = value;
        this.displayChange.emit(value);
    }

    get display(){
        return this.visible;
    }

    sanitize(){
        if(this.url){
            return this.sanitizer.bypassSecurityTrustUrl(this.url);
        }
        return null;
    }
}