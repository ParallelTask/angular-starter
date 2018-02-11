import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppConfiguration } from './app/app.configuration';
import { AppModule } from './app/app.module';

if (AppConfiguration.environment !== 'dev') {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));