import { Lang } from './../../models/Language.mode';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

  languages: Lang[];
  currentRoute: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(val => {
      if (val['url'] != undefined) {
        this.currentRoute = val['url'];

        this.languages = [
          {
            lang: 'ar',
            link: '/ar' + this.currentRoute,
            flag: null
          },
          {
            lang: 'en',
            link: '/en' + this.currentRoute,
            flag: null
          }
        ];
      }
    });
  }

  ngOnInit() { }

}
