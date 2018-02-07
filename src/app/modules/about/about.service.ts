import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { lodash } from '../../extensions/ext.module';
import { IAboutService } from './iabout.service';
import { TimeIntercept } from '../../core/decorators/time.intercept';

@Injectable()
export class AboutService implements IAboutService {

  constructor(private http: HttpClient) { }

  getCustomerById(id: number): Observable<string[]> {
    return this.http.get(`Customer/GetCustomerById/${id}`).map((customer: string[]) => {
      if (customer == null) {
        return [];
      }

      return customer;
    });
  }

  @TimeIntercept('AboutService', 'getContactEmail')
  getContactEmail(): string {
    return 'pt-hacker@example.com';
  }
}
