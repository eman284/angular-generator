import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<mci-footer _images="./assets/images/"  [_copyright]="copyright" _phone="9200000667"
  _social='{
      "youtube":"https://www.youtube.com/user/SaudiMCI",
      "facebook": "https://www.facebook.com/SaudiMCI",
      "instagram": "https://www.instagram.com/saudimci/",
      "twitter": "https://twitter.com/SaudiMCI"
}'></mci-footer>`
})
export class FooterComponent implements OnInit {
  copyright: string = "جميع الحقوق محفوظة، وزارة التجارة والاستثمار ©  " + new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
