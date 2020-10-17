import { Component, OnInit } from "@angular/core";

// import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: "app-header",
  template: `
    <mci-header
      #mciHeader
      _id="mciHeader"
      _images="./assets/images/"
      _lang="ar"
      _brand='{"label":"نظام السجل التجاري - خدمة تجديد السجل" ,"link":"/"}'
      _logo='{ "path":"./assets/images/logo.svg", "link":"https://mci.gov.sa/" }'
    ></mci-header>
  `
})
export class HeaderComponent implements OnInit {
  // constructor(private oAuthService:OAuthService) {}
  // logout(){
  //   this.oAuthService.logOut();
  // }
  constructor(){}
  ngOnInit() {}
}
