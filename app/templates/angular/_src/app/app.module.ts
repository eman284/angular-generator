import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, UrlSerializer } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";

import { UrlSerializerService } from "./shared/providers/urlSerializer/url-serializer.service";
// import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import {
  NgModule,
  PLATFORM_ID,
  APP_ID,
  Inject,
  APP_INITIALIZER,
} from "@angular/core";

import { SharedModule } from "./shared/shared.module";
// import { AuthModule } from "./auth/auth.module";

import { routes } from "./app-routing";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { <%= includeThemeNamePascal %>Module } from "./views/<%= includeThemeNameLower %>/<%= includeThemeNameLower %>.module";
import { AppConfigService } from './shared/providers/config.service';

export const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  imports: [
    <%= includeThemeNamePascal %>Module,
    BrowserModule.withServerTransition({ appId: "thiqah-ng-template" }),
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
    // AuthModule,
    ServiceWorkerModule.register("./ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  // NotFoundComponent
  declarations: [AppComponent],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    },
    { provide: UrlSerializer, useClass: UrlSerializerService }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
