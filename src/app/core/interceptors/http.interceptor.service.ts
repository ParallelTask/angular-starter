import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { IValidatorService } from '../utility/ivalidator.service';
import { IConfigurationService } from '../configuration/iconfiguration.service';
import { AppConfiguration } from '../../app.configuration';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(
        private validatorService: IValidatorService,
        private configService: IConfigurationService) { }

    /**
     * Intercepts every HTTP ajax request
     * @param req request object
     * @param next http handler object
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (AppConfiguration.enableHttpInterceptor) {
            const customHeaders = this.addHeaders(new HttpHeaders());
            const apiOrigin = this.validatorService.isAbsoluteURI(req.url) ? req.url : this.configService.apiOrigin() + req.url;

            const clonedRequest = req.clone({ headers: customHeaders, url: apiOrigin });

            return next.handle(clonedRequest).do(event => { }, err => {

                if (err instanceof HttpErrorResponse && err.status === 401) {

                } else if (err instanceof HttpErrorResponse && err.status === 403) {

                } else if (err instanceof HttpErrorResponse && err.status === 404) {
                } else { }
            });
        } else {
            return next.handle(req);
        }
    }

    /**
     * Adds cutom headers
     * @param headers HttpHeaders object
     */
    private addHeaders(headers: HttpHeaders): HttpHeaders {

        let _headers = headers;

        _headers = headers.set('Content-Type', 'application/json');
        _headers = headers.set('custom-header-key', 'custom-header-value');

        return _headers;
    }
}