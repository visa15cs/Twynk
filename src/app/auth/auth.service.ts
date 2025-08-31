import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environment } from "src/environments/environment";
import { BaseHttpService } from "../services/base-http/base-http.service";

@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseHttpService {
  login(data: any) {
    return this.http.post(`${this.url}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.url}/auth/signup`, data);
  }

  getUser() {
    return this.http.get(`${this.url}/auth/user`);
  }

  logout() {
    return this.http.post(`${this.url}/auth/logout`, {});
  }
}
