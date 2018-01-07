import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    imports: [
        HeaderModule,
        FooterModule
    ],
    exports: [
        HeaderModule,
        FooterModule
    ]
})
export class CoreModule { }