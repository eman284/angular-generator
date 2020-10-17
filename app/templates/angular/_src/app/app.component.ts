import { ActivatedRoute, NavigationEnd, Params, Router } from "@angular/router";
import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";

import { AppConfigService } from './shared/providers/config.service';
// import { AuthService } from './shared/providers/auth/auth-service.service';
// import { ConfirmationDialogService } from "./shared/providers/confirmation-dialog/confirmation-dialog.service";
// import { GoogleTagManagerService } from "./shared/providers/google-tag-manager.sevice";
import { LanguageUpdateService } from "./shared/providers/language/language.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private isRtl: boolean;
  private currenttLang: string;
  data: any;
  private currLang: string;
  copyright = "copyright";

  constructor(
    private config: AppConfigService,
    // private authService: AuthService,
    // private confirmationDialogService: ConfirmationDialogService,
    private _router: Router,
    public translate: TranslateService,
    private router: ActivatedRoute,
    private renderer: Renderer2,
    private languageService: LanguageUpdateService,
    // private googleTagManagerService: GoogleTagManagerService,
    private elementRef: ElementRef,
    private _ngZone: NgZone
  ) {
    // this.authService.reConfigure(config);
    this.setDefautLanguage("ar");
    this._router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: "page",
          pageName: item.url
        };

        // this.googleTagManagerService.pushTag(gtmTag);
      }
    });
  }

  ngOnInit() {
    this.router.queryParamMap.subscribe((param: Params) => {
      this.currLang = param.get("lang");
      if (this.currLang) {
        this.setDefautLanguage(this.currLang);
        if (this.currLang === "ar") {
          this.changeHtmlAttr(true);
        } else if (this.currLang === "en") {
          this.changeHtmlAttr(false);
        }
      }
    });
  }

  /**
   * @name changeHtmlAttr
   * @memberof AppComponent
   * @description set HTML tag attr language depending on the current language
   * @param {boolean} isRtl flag to know if current status is rtl or ltr
   * @returns {void}
   */
  private changeHtmlAttr(isRtl: boolean): void {
    if (isRtl) {
      this.renderer.addClass(document.querySelector("html"), "rtl");
      this.renderer.removeClass(document.querySelector("html"), "ltr");
      this.renderer.setAttribute(document.querySelector("html"), "lang", "ar");
    } else {
      this.renderer.addClass(document.querySelector("html"), "ltr");
      this.renderer.removeClass(document.querySelector("html"), "rtl");
      this.renderer.setAttribute(document.querySelector("html"), "lang", "en");
    }
  }

  private setDefautLanguage(lang: string): void {
    this.translate.setDefaultLang(lang ? lang : "ar");
    this.translate.use(lang ? lang : "ar");
    this.languageService.setLang(lang);
    this.changeHtmlAttr(lang === "ar");
  }

  // public openConfirmationDialog() {
  //   this.confirmationDialogService
  //     .confirm("Please confirm..", "Do you really want to ... ?")
  //     .then(confirmed => console.log("User confirmed:", confirmed))
  //     .catch(() =>
  //       console.log(
  //         "User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)"
  //       )
  //     );
  // }
}
