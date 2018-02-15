import { Observable } from 'rxjs/Observable';
import { Autofixture } from '../setup/extensions';

export class Fixture extends Autofixture {
    private static _count: number = 3;

    static createRxObservable<T>(data?: T): Observable<T> {
        return new Observable(observer => {
            observer.next(data);
        });
    }

    static createStringMany(count?: number): string[] {
        let loop = count === undefined ? Fixture._count : count;
        let _arr: string[] = [];

        for (let i = 0; i < loop; i++) _arr.push(Fixture.createString());

        return _arr;
    }

    static createBooleanMany(count?: number): boolean[] {
        let loop = count === undefined ? Fixture._count : count;
        let _arr: boolean[] = [];

        for (let i = 0; i < loop; i++) _arr.push(Fixture.createBoolean());

        return _arr;
    }

    static createNumberMany(count?: number): number[] {
        let loop = count === undefined ? Fixture._count : count;
        let _arr: number[] = [];

        for (let i = 0; i < loop; i++) _arr.push(Fixture.createNumber());

        return _arr;
    }

    static createIntegerMany(count?: number): number[] {
        let loop = count === undefined ? Fixture._count : count;
        let _arr: number[] = [];

        for (let i = 0; i < loop; i++) _arr.push(Fixture.createInteger());

        return _arr;
    }
}
