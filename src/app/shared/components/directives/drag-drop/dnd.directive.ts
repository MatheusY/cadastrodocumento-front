import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[appDnd]'
})
export class DndDirective {

    fileOver: boolean;
    @Output()fileDropped = new EventEmitter<any>();

    @HostBinding('class.fileover') fileover: boolean;
    @HostBinding('style.border-color') bordercolor: string;
    @HostBinding('style.border-style') borderstyle: string; 

    @HostListener('dragover', ['$event']) onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.bordercolor = '#6495ED';
        this.borderstyle = 'solid';
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('drop', ['$event']) public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.bordercolor = '#000000'
        this.borderstyle = 'dotted';

        this.fileOver = false;
        const files = evt.dataTransfer.files;

        if(files.length > 0){
            this.fileDropped.emit(files[0]);
        }
    }
}