import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './<%= includeThemeNameLower %>.routing';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './<%= includeThemeNameLower %>-component/home/home.component';
import { ContactUsComponent } from './<%= includeThemeNameLower %>-component/contact-us/contact-us.component';
import { App<%= includeThemeNamePascal %>Component } from './app-<%= includeThemeNameLower %>.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    App<%= includeThemeNamePascal %>Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[
   
  ]
})
export class <%= includeThemeNamePascal %>Module { }
