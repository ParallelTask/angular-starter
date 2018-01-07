import { NgModule } from '@angular/core';
import { UtilityProviders  } from './utility.providers';

@NgModule({
    providers: [
        UtilityProviders.IConvertService,
        UtilityProviders.IDateService,
        UtilityProviders.IUriService,
        UtilityProviders.IValidatorService
    ]
})
export class UtilityModule {}
