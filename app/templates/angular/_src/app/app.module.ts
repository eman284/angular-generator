import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<%_ if (includeAboutUs) { -%>
  import { AboutUsComponent } from './pages/about-us/about-us.component';
  <%_ } -%>
  <%_ if (includeContactUs) { -%>
    import { ContactUsComponent } from './pages/contact-us/contact-us.component';
    <%_ } -%>
  import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    <%_ if (includeAboutUs) { -%>
      ,AboutUsComponent
      <%_ } -%>
      <%_ if (includeContactUs) { -%>
        ,ContactUsComponent
        <%_ } -%>
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
