import { Injectable } from "@angular/core";
import { BaseHttpService } from "./base-http/base-http.service";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Profile } from "../model/profile.model";

@Injectable({
  providedIn: "root",
})
export class ProfileService extends BaseHttpService {
  profile: Profile;

  getProfile(): Observable<Profile> {
    return this.http.get(`${this.url}/profile`).pipe(
      map((data: any) => {
        const profile = Profile.fromJson(data);
        this.profile = profile;
        return profile;
      }),
    );
  }

  getPostsByHandle(handle: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/u/${handle}/posts`);
  }
}
