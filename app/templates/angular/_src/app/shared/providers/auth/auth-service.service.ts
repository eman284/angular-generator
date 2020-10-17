// import * as config from "../../../../assets/config.json";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subscription, interval } from "rxjs";

import { Injectable } from "@angular/core";
import { LanguageUpdateService } from "../language/language.service";
import { MyJwksValidationHandler } from "src/app/auth/providers/MyJwksValidationHandler";
// import { OAuthService } from "angular-oauth2-oidc";
// import { RefreshTokenResponse } from 'src/app/auth/models/models';
import { Router } from "@angular/router";
// import { authConfig } from "../../models/authConfig";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private isAuthorized: boolean = false;
  private permissions: string[];
  private currentLang: string;

  tokenRefreshmentSubscription: Subscription;
  tokenRefreshmentInterval = interval(180000);
  private env;

  constructor(
    // private _oauthService: OAuthService,
    private _router: Router,
    private _languageService: LanguageUpdateService,
    private http: HttpClient
  ) {
    this.currentLang = this._languageService.getCurrentLangSt();

    // //refresh token on page load if its close to expire :
    // this.handleRefreshTokenOnLoad();
    // //token refresh interval

    // this.tokenRefreshmentSubscription = this.tokenRefreshmentInterval.subscribe(
    //   (val) => this.setRefreshTokenInSessionStorage()
    // );
  }

//   checkIfLoggedIn(): boolean {
//     this.isLoggedIn = this._oauthService.hasValidAccessToken();
//     return this.isLoggedIn;
//   }

  checkIfAuthorized(role: string, reqPermissions?: string[]): boolean {
    let issues: number = 0;
    this.permissions = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))["permissions"]
      : null;

    if (reqPermissions && reqPermissions.length > 0) {
      reqPermissions.filter((permission, i, arr) => {
        if (this.permissions.indexOf(permission) === -1) {
          issues++;
          return false;
        }
      });

      this.isAuthorized = issues === 0;
    } else {
      this.isAuthorized = true;
    }

    return this.isAuthorized;
  }

//   configure(): void {
//     this._oauthService.events.subscribe((res: { type: any }) => {
//       switch (res.type) {
//         case "token_received":
//           if (this._router.url.indexOf("keyclock") > 0) {
//             this.navigateToHome();
//           }
//           break;
//         default:
//           break;
//       }
//     });
//     if (!this._oauthService.hasValidAccessToken()) {
//       this._oauthService.tokenValidationHandler = new MyJwksValidationHandler();
//       this._oauthService.loadDiscoveryDocumentAndLogin().then(
//         (v) => {
//           //this._oauthService.logoutUrl = `https://iam.test.thiqah.sa:4433/auth/realms/mci/protocol/openid-connect/logout?client_id={{client_id}}&id_token={{id_token}}&redirect_uri=${window.location.origin}`;
//           this._oauthService
//             .loadUserProfile()
//             .then(
//               (userInfo) => {
//                 this.navigateToHome();
//               },
//               (res) => {
//                 this._oauthService.setupAutomaticSilentRefresh();
//               }
//             )
//             .catch((reason) => {});
//         },
//         (err) => {}
//       );
//     } else {
//       this._oauthService.setupAutomaticSilentRefresh();
//       this.navigateToHome();
//     }
//   }

//   reConfigure(config: any): void {
//     this.env = config.getConfig();
//     if (!this._oauthService.logoutUrl) {
//       authConfig.issuer = this.env.realm_url;
//       authConfig.clientId = this.env.client_id;
//       authConfig.logoutUrl = this.env.realm_url + authConfig.logoutUrl;
//       this._oauthService.configure(authConfig);
//     }
//   }

  navigateToLogin() {
    this._router.navigate([this.currentLang]);
  }

  navigateToHome() {
    let lang = sessionStorage.getItem("lang");
    this._router.navigate([`/${lang}/mci-home`]);
  }

//   refreshToken(): Observable<RefreshTokenResponse> {
//     var body =
//       "client_id=" +
//       this._oauthService.clientId +
//       "&redirect_uri=" +
//       this._oauthService.redirectUri +
//       "&grant_type=refresh_token" +
//       "&refresh_token=" +
//       this._oauthService.getRefreshToken();

//     let url = this.env.refreshTokenUrl; // config.refreshTokenUrl;

//     const httpOptions = {
//       headers: new HttpHeaders({
//         "Content-Type": "application/x-www-form-urlencoded",
//       }),
//     };

//     return this.http.post(url, body, httpOptions);
//   }

//   logout(): any {
//     var body =
//       "client_id=" +
//       this._oauthService.clientId +
//       "&refresh_token=" +
//       this._oauthService.getRefreshToken();

//     let url = this.env.logoutUrl;

//     const httpOptions = {
//       headers: new HttpHeaders({
//         "Content-Type": "application/x-www-form-urlencoded",
//       }),
//     };

//     return this.http.post(url, body, httpOptions);
//   }

//   setRefreshTokenInSessionStorage() {
//     this.refreshToken().subscribe((res) => {
//       sessionStorage.setItem("access_token", res.access_token);
//       sessionStorage.setItem("refresh_token", res.refresh_token);

//       let currentDate = new Date();
//       currentDate.setSeconds(currentDate.getSeconds() + res.expires_in);

//       sessionStorage.setItem("expires_at", currentDate.getTime().toString());
//     });
//   }

//   handleRefreshTokenOnLoad() {
//     window.onload = () => {
//       let tokenExpiryString = sessionStorage.getItem("expires_at");

//       let currentokenExpiryDate = new Date(parseInt(tokenExpiryString));

//       let currentDate = new Date();
//       currentDate.setMinutes(currentDate.getMinutes() + 2);

//       if (currentDate >= currentokenExpiryDate) {
//         this.setRefreshTokenInSessionStorage();
//       }
//     };
//   }

}
