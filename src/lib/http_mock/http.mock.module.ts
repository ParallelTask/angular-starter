import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientMock } from './http.client.mock';

@NgModule({
    providers: [
        {
            provide: HttpClient,
            useFactory: (): HttpClient => {
                return HttpClientMock.object();
            }
        }
    ]
})
export class HttpMockModule { }
