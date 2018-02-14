import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as lodash from 'lodash';
import { IAboutService } from './iabout.service';
import { TimeInterceptor } from '../../core/decorators/decorators';

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

  @TimeInterceptor('AboutService', 'getContactEmail')
  getContactEmail(): string {
    return 'pt-hacker@example.com';
  }
}
