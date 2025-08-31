import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-redirect",
  template: "",
})
export class RedirectComponent {
  constructor() {
    const router = inject(Router);
    const token = localStorage.getItem("authToken");
    router.navigate([token ? "/dashboard" : "authentication"]);
  }
}
