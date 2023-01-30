import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email="";
  password="";
  errorMsg="";

  hide: boolean = false;

  constructor(private fb: FormBuilder,private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  login() {
    if(this.email.trim().length === 0){
      this.errorMsg = "Email is required";
    }else if(this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg="";
      let res = this.auth.login(this.email, this.password);
      if(res === 200) {
        alert("Login successfully!");
        this.router.navigate(['home'])
      }
      if(res ===403) {
        alert("Invalid login,try again!");
      }
    }
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

}