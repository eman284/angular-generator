import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) { enableProdMode(); }
if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
// const translations = require(`raw-loader!./assets/i18n/messages.ar.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    // { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
});

