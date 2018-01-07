import { NgModule } from '@angular/core';
import { ConfigurationProviders } from './configuration.providers';

@NgModule({
    providers: [
        ConfigurationProviders.IConfigurationService
    ]
})
export class ConfigurationModule {}