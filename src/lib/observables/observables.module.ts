import { NgModule } from '@angular/core';
import { PtHackerRxClickDirective } from './rx.click.directive';

@NgModule({
    declarations: [
        PtHackerRxClickDirective
    ],
    exports: [
        PtHackerRxClickDirective
    ]
})
export class ObservablesModule { }
