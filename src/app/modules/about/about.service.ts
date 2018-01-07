import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { lodash } from '../../extensions/ext.module';
import { IAboutService } from './iabout.service';

@Injectable()
export class AboutService implements IAboutService {
    
    constructor(private http: HttpClient) { }

    getCustomerById(id: number): Observable<boolean> {
        return this.http.get('Customer/GetCustomerById/${id}').map((customer: boolean) => {
            return customer;
        });
    }

    getContactEmail(): string {
        return 'pt-hacker@example.com';
    }
}