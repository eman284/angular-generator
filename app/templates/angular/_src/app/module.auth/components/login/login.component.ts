import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "src/app/shared/providers/auth/auth-service.service";
import { User } from "../../models/User.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl("eve.holt@reqres.in", [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ]),
      password: new FormControl("cityslicka", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])
    });
  }

  onSubmit(form: FormGroup): void {
    console.log(form);
    if (form.valid) {
      this.auth.login(form.value).subscribe(res => {
        if (res) {
          // role and permissions supose to come from api response
          res.role = "super";
          res.permissions = ["canView", "canEdit"];
          localStorage.setItem("user", JSON.stringify(res));
        }
      });
    }
  }

  ngOnInit() {}
}
