export class ObjectUtils {

    static deepValue(object: any, property: string): any {
        const arr = property.split('.');
        while (arr.length && object) {
            object = object[arr.shift()];
        }
        return object;
    }
}