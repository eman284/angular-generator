import { LanguageUpdateService } from './../../providers/language/language.service';
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "app-language-switcher",
  templateUrl: "./language-switcher.component.html",
  styleUrls: ["./language-switcher.component.css"]
})
export class LanguageSwitcherComponent implements OnInit {
  languages: string[];
  currentang: string;
  q: string;
  isTranslated: boolean;
  constructor(
    public translate: TranslateService,
    private location: Location,
    private language: LanguageUpdateService,
    private router: ActivatedRoute
  ) {
    this.language.getCurrentLang().subscribe(lang => {
      this.currentang = lang;
    });
  }

  ngOnInit() {
    this.language.getLanguageStatus().subscribe(status => {
      this.languages = ["ar", "en"];
      this.isTranslated = status;
    });
    this.router.queryParamMap.subscribe(param => {
      if (param) {
        this.q = param.get("q");
      }
    });
  }

  changeLang(lang: string): void {
    let htmlTag = document.getElementsByTagName("html");
    if (lang === "ar") {
      htmlTag[0].classList.remove("ltr");
      htmlTag[0].classList.add("rtl");
      htmlTag[0].setAttribute("lang", lang);
    } else {
      htmlTag[0].classList.remove("rtl");
      htmlTag[0].classList.add("ltr");
      htmlTag[0].setAttribute("lang", "ar");
    }
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.language.setLang(lang);
    this.location.go(`${location.pathname}?lang=${lang}&q=${this.q}`);
  }
}
