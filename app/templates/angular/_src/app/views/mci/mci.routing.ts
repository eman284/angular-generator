import { Routes } from '@angular/router';
import { AuthGuard } from "../../shared/providers/guard/auth-guard.service";
import { App<%= includeThemeNamePascal %>Component } from "./app-<%= includeThemeNameLower %>.component";
import { HomeComponent } from './<%= includeThemeNameLower %>-component/home/home.component';
import { ContactUsComponent } from './<%= includeThemeNameLower %>-component/contact-us/contact-us.component';
// import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: ":lang",
    // canActivate: [AuthGuard],
    component:App<%= includeThemeNamePascal %>Component,
    children: [{ path: "", component: HomeComponent },
      {path:"home" , component:HomeComponent},
      {path:"contact-us" , component:ContactUsComponent},
      // { path: "**", component: NotFoundComponent }
    ],
    
  },
  
];
