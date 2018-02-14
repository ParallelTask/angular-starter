import { Observable } from 'rxjs/Observable';

export abstract class IAboutService {
  abstract getCustomerById(id: number): Observable<string[]>;
  abstract getContactEmail(): string;
}
