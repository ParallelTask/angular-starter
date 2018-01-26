import { Observable } from 'rxjs/Rx';

export abstract class IAboutService {
  abstract getCustomerById(id: number): Observable<string[]>;
  abstract getContactEmail(): string;
}
