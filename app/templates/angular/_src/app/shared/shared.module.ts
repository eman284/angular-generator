import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NO_ERRORS_SCHEMA,
  NgModule
} from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppInterceptor } from "./providers/interceptor/interceptor.service";
import { AuthGuard } from "./providers/guard/auth-guard.service";
// import { AuthService } from "./providers/auth/auth-service.service";
import { CommonModule } from "@angular/common";
// import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
// import { ConfirmationDialogService } from './providers/confirmation-dialog/confirmation-dialog.service';
import { ConvertGerogianToHijriPipe } from "./pipes/convert-date.pipe";
import { EndpointsService } from './providers/endpoints/endpoints.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
// import { LanguageSwitcherComponent } from "./components/language-switcher/language-switcher.component";
// import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './providers/interceptor/loader-interceptor.service';
// import { LoaderService } from './components/loader/loader.service';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { QueryService } from "./providers/query-service/query.service";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UrlSerializerService } from './providers/urlSerializer/url-serializer.service';

const services = [
  // ConfirmationDialogService,
  AuthGuard,
  // AuthService,
  QueryService,
  EndpointsService,
  // LoaderService,
  UrlSerializerService
];

const sharedModules = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  NgbPaginationModule,
  NgSelectModule,
  NgOptionHighlightModule,
  NgbModule,
  TranslateModule
];

const sharedMComponents = [
  // LanguageSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  // LoaderComponent
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  // ConfirmationDialogComponent
  declarations: [sharedMComponents, ConvertGerogianToHijriPipe, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [...sharedModules, sharedMComponents, ConvertGerogianToHijriPipe],
  // entryComponents: [ConfirmationDialogComponent],
  providers: [
    ...services,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule {
  constructor() { }

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...services]
    };
  }
}
