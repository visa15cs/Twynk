import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthService } from "src/app/auth/auth.service";
import { Profile } from "src/app/model/profile.model";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  standalone: true,
  selector: "app-sidebar",
  imports: [RouterModule, CommonModule],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  api = inject(ProfileService);
  authService = inject(AuthService);
  router = inject(Router);
  profile: Profile = new Profile();
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.getProfile().subscribe((profile) => {
      this.profile = profile;
    });
  }

  Logout() {
    this.authService.logout().subscribe(
      (res) => {
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
        this.router.navigate(["/authentication"]);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
