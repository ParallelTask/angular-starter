import { NgModule } from '@angular/core';
import { HttpInterceptorProviders } from './http.interceptor.providers';

@NgModule({
    providers: [
        HttpInterceptorProviders.IHttpInterceptorService
    ]
})
export class HttpInterceptorModule { }