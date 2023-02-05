import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { AuthService } from "../../shared/services/firebase/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  loginForm: FormGroup;
  errorMessage: any;

  pageType: "admin" | "student" = "student";

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ["test@gmail.com", [Validators.required, Validators.email, Validators.pattern(environment.emailRegex)]],
      password: ["test123", Validators.required],
    });
  }

  ngOnInit() {
    if (this.router.url.includes("auth")) {
      this.pageType = "admin";
    } else {
      this.pageType = "student";
    }
  }

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    this.authService.SignIn(this.loginForm.value["email"], this.loginForm.value["password"]);
  }
}
