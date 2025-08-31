import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import "zone.js";
import { HttpInterceptorService } from "./app/auth/auth.interceptor";
import { routes } from "./routes";
import { AppComponent } from "./app/app/app.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatButtonModule,
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
