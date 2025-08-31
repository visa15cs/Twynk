import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BaseHttpService {
  url = Environment.url;
  constructor(public http: HttpClient) {}
}
