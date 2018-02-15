import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:no-implicit-dependencies
import { Mock } from 'moq.ts';
import { HttpMockAPi } from './http.mock.api';

export const HttpClientMock = new Mock<HttpClient>()
    .setup(x => x.get)
    .returns((uri: string) => {
        for (const prop in HttpMockAPi.get) {
            if (new RegExp(prop).test(uri) === true) {
                return HttpMockAPi.get[prop](uri);
            }
        }
        throw new Error(`MockHttpApi says GET '${uri}' not found - 404`);
    })
    .setup(x => x.post)
    .returns((uri: string, data: any) => {
        for (const prop in HttpMockAPi.post) {
            if (new RegExp(prop).test(uri) === true) {
                return HttpMockAPi.post[prop](uri, data);
            }
        }
        throw new Error(`MockHttpApi says POST '${uri}' not found - 404`);
    });