import { Page } from '../../types/page.type';

export class PageImpl<E> implements Page<E> {
    constructor(public data?: E[], public count?: number){}

    static of<E>(data: E[], count?: number): Page<E> {
        return new PageImpl<E>(data, count);
    }
}