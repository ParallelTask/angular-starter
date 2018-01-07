import { Observable } from 'rxjs/Rx';

export abstract class IAboutService {
    abstract getCustomerById(id: number): Observable<boolean>;
    abstract getContactEmail(): string;
}