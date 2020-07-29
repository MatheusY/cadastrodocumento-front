import { PipeTransform, Pipe } from '@angular/core';
import { ObjectUtils } from 'app/core/utils';

@Pipe({
    name: 'deepValue'
})
export class DeepValuePipe implements PipeTransform {
    
    transform(value: any, property: string) {
        return ObjectUtils.deepValue(value, property);
    }

}