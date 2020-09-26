import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<%_ if (includeAboutUs) { -%>
  import { AboutUsComponent } from './pages/about-us/about-us.component';
  <%_ } -%>

  <%_ if (includeContactUs) { -%>
    import { ContactUsComponent } from './pages/contact-us/contact-us.component';
    <%_ } -%>

import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  <%_ if (includeAboutUs) { -%>
    { path: 'about-us', component: AboutUsComponent },
    <%_ } -%>
  <%_ if (includeContactUs) { -%>
    { path: 'contact-us', component: ContactUsComponent },
    <%_ } -%>
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
