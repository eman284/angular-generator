import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { BrowserGlobalsService } from 'browser-globals';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleTagManagerService {

  constructor(private browserGlobals: BrowserGlobalsService) {
  }
  public getDataLayer() {
    const window = this.browserGlobals.windowRef();
    window['dataLayer'] = window['dataLayer'] || [];
    return window['dataLayer'];
  }

  private pushOnDataLayer(obj: object) {
    const dataLayer = this.getDataLayer();
    dataLayer.push(obj);
  }

  loadGTMHeader() {
    const doc = this.browserGlobals.documentRef();
    this.pushOnDataLayer({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm/js?id=' + environment.code;
    document.head.insertBefore(script, document.head.firstChild);
  }

  public pushTag(item: object) {
    this.loadGTMHeader();
    this.pushOnDataLayer(item);
  }
}
