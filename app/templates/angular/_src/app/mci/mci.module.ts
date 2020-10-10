import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { routes } from './mci-routing';
import { HomeMciComponent } from './components/home/home.component';
import { CommericialRegSystemComponent } from './components/commericial-reg-system/commericial-reg-system.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [HomeMciComponent,HeaderComponent,FooterComponent, CommericialRegSystemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class MciModule { }
