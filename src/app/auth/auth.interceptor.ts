import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let clonedRequest: HttpRequest<any> = request.clone();
    if (
      request.url.indexOf("logout") > -1 ||
      request.url.indexOf("auth") === -1
    ) {
      const token = localStorage.getItem("authToken");
      clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        console.error("Error occurred:", error);
        if (error.error.statusCode === 401) {
          console.error("Unauthorized request, redirecting to login");
          this.router.navigate(["/authentication"]);
        }
        const errorMessage =
          error.error?.message ||
          error.message ||
          "Something went wrong. Please try again later.";
        return throwError(() => new Error(errorMessage));
      }),
    );
  }
}
