import { OnInit, OnDestroy, Input, ChangeDetectorRef, Component, ViewEncapsulation, ViewRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'custom-error',
    templateUrl: './error.component.html',
    styleUrls: ['error.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CustomErrorComponent implements OnInit, OnDestroy {
    @Input() control: FormControl;

    show: Observable<boolean>;

    constructor(private cdr: ChangeDetectorRef){}
    
    ngOnInit(): void {
        if (this.control) {
            this.control.statusChanges.subscribe(status => {
                const { invalid, touched, dirty } = this.control;

                this.show = of(invalid && (touched || dirty));
                if (!(this.cdr as ViewRef).destroyed) {
                    this.cdr.detectChanges();
                }
            });
        }
    }

    ngOnDestroy(): void {
        this.cdr.detach();
    }

    get text(): string {
        for (const propertyName in this.control.errors){
            if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.control.dirty)){
                return this.interpolate(propertyName);
            }
        }

        return null;
    }

    private interpolate(propertyName: string): string {
        let message: string = null;

        if ('required' === propertyName || 'empty' === propertyName) {
            return 'Campo obrigatório';
        } else if ('min' === propertyName) {
            return `Valor não pode ser menor que ${this.control.errors[propertyName].min}.`;
        } else if ('minlength' === propertyName) {
            return `Mínimo de ${this.control.errors[propertyName].requiredLength} caracteres é necessário.`;
        }else if ('email' === propertyName){
            return 'E-mail inválido'
        }

        return 'Problema no campo';
    }

}