import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./register.component.html",
})
export class RegisterComponent {
  form = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.email],
    username: ["", Validators.required],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required],
  });
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
    this.form.controls.confirmPassword.valueChanges.subscribe(() => {
      if (
        this.form.controls.password.value !==
        this.form.controls.confirmPassword.value
      ) {
        this.form.controls.confirmPassword.setErrors({ mismatch: true });
      } else {
        this.form.controls.confirmPassword.setErrors(null);
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.error = "Passwords do not match";
      return;
    }
    this.loading = true;
    this.auth
      .register({
        name: this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password,
        username: this.form.value.username,
      })
      .subscribe(
        (user) => {
          this.loading = false;
          if (user) this.router.navigateByUrl("/dashboard");
          else this.error = "Registration failed";
        },
        (error) => {
          this.loading = false;
          this.error =
            error.error?.message || error.message || "Registration failed";
        },
      );
  }
}
