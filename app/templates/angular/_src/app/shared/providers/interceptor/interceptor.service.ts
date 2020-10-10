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

@Injectable({
  providedIn: "root"
})
export class AppInterceptor implements HttpInterceptor {
  recaptchaToken: string = "";

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem("token") || "Basic xyz=";

    if (!request.headers.has("Content-type")) {
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
        headers: request.headers.set("Accept-Language", this.locale)
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        if (
          error.status === 401 ||
          error.status === 403 ||
          error.status === 400
        ) {
          console.log("error.status", error.status);
        }
        return throwError(error);
      })
    );
  }
}
