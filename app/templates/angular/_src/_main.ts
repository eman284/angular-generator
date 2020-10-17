import * as config from "./assets/config.json";

import { ViewEncapsulation, enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { style } from '@angular/animations';

// const config = require('./assets/config.json');
// environment.api = config["baseUrl"];
// environment.code = config["code"];

const initStyles = function () {
  return new Promise((resolve, reject) => {
    let styles = ['css/rtl/style.css', 'css/rtl/renew.css']
      , querystring = '',
      p = /(renew.css)|(style.css)/g;

    styles.forEach(stylePath => {
      let brandingBaseURL = document.createElement('link');
      brandingBaseURL.setAttribute("href", './assets/css/rtl/style.css' );
      brandingBaseURL.setAttribute("rel", "stylesheet");
      brandingBaseURL.setAttribute("id", stylePath.match(p)[0]);
      document.head.appendChild(brandingBaseURL);
    });

    if (
      document.getElementById('style.css') &&
      document.getElementById('renew.css')
    ) {
      return resolve(true);
    }
  });
}

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

if (config.production) {
  enableProdMode();
}

initStyles().then(res => {
  if (res) {
    setTimeout(() => {
      platformBrowserDynamic().bootstrapModule(AppModule, {
        defaultEncapsulation: ViewEncapsulation.None
      });
    }, 300);

  }
});
