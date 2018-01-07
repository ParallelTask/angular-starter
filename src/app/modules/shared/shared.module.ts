import { NgModule } from '@angular/core';
import { PageErrorModule } from './page-error/page.error.module';

@NgModule({
    imports: [
        PageErrorModule
    ],
    exports: [
        PageErrorModule
    ]
})
export class SharedModule {}