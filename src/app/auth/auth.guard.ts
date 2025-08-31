import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem("authToken");
  const router = inject(Router);

  return token ? true : router.parseUrl("/authentication/login");
};
