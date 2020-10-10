import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UrlSerializerService } from './shared/providers/urlSerializer/url-serializer.service';

import { SharedModule } from "./shared/shared.module";
import { UrlSerializer } from "@angular/router";
import { AuthModule } from "./module.auth/auth.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<%_ if (includeDefultTheme) { -%>
import { DefultModule } from "./defult/defult.module";
<%_ } -%>
<%_ if (includeMCITheme) { -%>
import { MciModule } from "./mci/mci.module";
<%_ } -%>
<%_ if (includeSAUDITheme) { -%>
import { SaudiModule } from "./saudi/saudi.module";
<%_ } -%>
<%_ if (includeMERASTheme) { -%>
import { MerasModule } from "./meras/meras.module";
<%_ } -%>

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    AuthModule
    <%_ if (includeDefultTheme) { -%>
    ,DefultModule
        <%_ } -%>
    <%_ if (includeMCITheme) { -%>
    , MciModule
    <%_ } -%>
    <%_ if (includeSAUDITheme) { -%>
    , SaudiModule
    <%_ } -%>
    <%_ if (includeMERASTheme) { -%>
    ,MerasModule
    <%_ } -%>
  ],
  providers: [
    { provide: UrlSerializer, useClass: UrlSerializerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
