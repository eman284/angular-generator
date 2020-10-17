import { Injectable, LOCALE_ID, Inject } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { LanguageUpdateService } from '../language/language.service';
import * as environment from "../../../../assets/config.json";

@Injectable({
  providedIn: "root"
})
export class AppInterceptor implements HttpInterceptor {
  recaptchaToken: string = "";

  constructor(
    private languageUpdateService:LanguageUpdateService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = `Bearer ${sessionStorage.getItem("access_token")}` || '';

    
    if (!request.headers.has("Content-type") && !request.url.toLowerCase().includes('upload')) {
      request = request.clone({
        headers: request.headers.set("Content-type", "Application/json")
      });
    }

    if (!request.headers.has("Authorization")) {
      request = request.clone({
        headers: request.headers.set("Authorization", token)
      });
    }

    if (!request.headers.has("Accept-Language")) {
      request = request.clone({
        headers: request.headers.set("Accept-Language", this.languageUpdateService.getCurrentLangSt())
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        if (error.status === 403 || error.status === 400 || error.status === 500) {
          console.log("error.status", error.status);
        }
        else if(error.status === 401){

        }
        return throwError(error);
      })
    );
  }
}
