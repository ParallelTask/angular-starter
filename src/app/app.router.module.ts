import { NgModule, Provider, ModuleWithProviders, Type } from '@angular/core';
import { RouterModule, Routes, DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';
import { AppConfiguration } from './app.configuration';

const routes: Routes = [];

// Configure routes as case insensitive
// Angular default treats routes as case sensitive
class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }
}

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: AppConfiguration.useHashStrategy })],
    exports: [RouterModule],
    providers: [ AppConfiguration.useCaseSensitiveUrl ? [] : {
        provide: UrlSerializer,
        useClass: LowerCaseUrlSerializer
    }]
})
export class AppRouterModule { } 