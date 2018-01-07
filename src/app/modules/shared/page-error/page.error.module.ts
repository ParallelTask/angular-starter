import { NgModule } from '@angular/core';
import { NotFoundComponent } from './notfound.component';
import { ServerErrorComponent } from './server.error.component';
import { UnauthorizedComponent } from './unauthorized.component';

@NgModule({
    declarations: [
        NotFoundComponent,
        ServerErrorComponent, 
        UnauthorizedComponent
    ],
    exports: [
        NotFoundComponent,
        ServerErrorComponent, 
        UnauthorizedComponent
    ]
})
export class PageErrorModule {}