import { PipeTransform } from '@angular/core';

export class CamelCaseToDashPipe implements PipeTransform {
   
   
    transform(value: any, args: any[] = []): string {
        return value ? String(value).replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) : '';
    }
}