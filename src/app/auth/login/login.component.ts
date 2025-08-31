import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatCheckboxModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  form = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: [false],
  });
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  submit(): void {
    if (this.form.valid) {
      this.authService
        .login({
          email: this.form.value.username,
          password: this.form.value.password,
        })
        .subscribe({
          next: (res: any) => {
            console.log(res);
            localStorage.setItem("authToken", res.authToken);
            if (this.form.value.rememberMe) {
              localStorage.setItem("authToken", res.authToken);
            } else {
              sessionStorage.setItem("authToken", res.authToken);
            }
            this.router.navigate(["/dashboard"]);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    }
  }
}
