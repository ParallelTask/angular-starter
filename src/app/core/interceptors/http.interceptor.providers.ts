import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http.interceptor.service';

export const HttpInterceptorProviders = {
    IHttpInterceptorService: {
        // Register Http interceptor
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true
    }
};
