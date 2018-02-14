import { NgModule } from '@angular/core';
import { HttpInterceptorProviders } from './http.interceptor.providers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        HttpInterceptorProviders.IHttpInterceptorService
    ]
})
export class HttpInterceptorModule { }