import { UrlSerializerService } from './providers/urlSerializer/url-serializer.service';
import {
  NgModule,
  ModuleWithProviders,
  LOCALE_ID,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ConvertGerogianToHijriPipe } from "./pipes/convert-date.pipe";
import { AuthGuard } from "./providers/guard/auth-guard.service";
import { AuthService } from "./providers/auth/auth-service.service";
import { QueryService } from "./providers/query-service/query.service";
import { AppInterceptor } from "./providers/interceptor/interceptor.service";
import { EndpointsService } from './providers/endpoints/endpoints.service';
import { LoaderInterceptor } from './providers/interceptor/loader-interceptor.service';

import { LanguageSwitcherComponent } from "./components/language-switcher/language-switcher.component";
// import { AgGridModule } from "ag-grid-angular";
import localeAr from "@angular/common/locales/ar";
import { LoaderService } from './components/loader/loader.service';

registerLocaleData(localeAr, "ar");

const services = [AuthGuard, AuthService, QueryService, EndpointsService,LoaderService, UrlSerializerService];

const sharedModules = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  // AgGridModule,
  NgbPaginationModule,
  NgbModule
];

const sharedMComponents = [LanguageSwitcherComponent];

@NgModule({
  declarations: [sharedMComponents, ConvertGerogianToHijriPipe],
  exports: [...sharedModules, sharedMComponents, ConvertGerogianToHijriPipe],
  providers: [
    ...services,
    { provide: LOCALE_ID, useValue: "ar" },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  constructor() {}

  static forRoot(): ModuleWithProviders <SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...services]
    };
  }
}
