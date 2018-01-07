import { NgModule } from '@angular/core';
import { RouterModule, Routes, DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';

const routes: Routes = [];

// Configure routes as case insensitive
// Angular default treats routes as case sensitive
class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }
}

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
    providers: [
         {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
    ]
})
export class AppRouterModule { } 