import { Observable } from 'rxjs/Observable';
import { Fixture } from '../test_framework/fixture/fixture.core';

export const HttpMockAPi = {
    get: {
        // Key is the RegEx to match, You can pass literal string or RegEx
        // When you perform get using
        // this.http.get(Customer/GetCustomerById/45)
        // following handler gets executed.
        'Customer/GetCustomerById/45': (uri: string): Observable<string[]> => {
            return Fixture.createRxObservable<string[]>(Fixture.createStringMany());
        }
    },
    post: {
        'Customer/GetCustomerById/45': (uri: string, data: any): Observable<string[]> => {
            return Fixture.createRxObservable<string[]>(Fixture.createStringMany());
        }
    }
};