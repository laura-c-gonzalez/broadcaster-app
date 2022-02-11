import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared-services/login.service';
import { Login } from './Dto/login';
import { createPasswordStrengthValidator } from './validators/password-strength.validator';
import { Router } from '@angular/router';
import { AuthLoginService } from '../shared-services/auth-login/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private LoginService: LoginService,
    private router: Router,
    public authService: AuthLoginService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['testuser@email.com', [Validators.required]],
      password: ['test', [Validators.required]]

      //validators required when user submitting login info
      //email: ['', {
      //  validators: [Validators.required, Validators.email],
      //  updateOn: 'blur'
      //}],

      //password: ['', [Validators.required,
      //Validators.minLength(8),
      //createPasswordStrengthValidator()
      //]]
    });

  }

  get emailControl() {
    return this.loginForm.controls['email'];
  }
  get passwordControl() {
    return this.loginForm.controls['password'];
  }

  onSubmit() {
    debugger;
   

    //this.email = this.loginForm.value.email;
    //this.authService.login(this.email, this.password)
    //  .subscribe(data => {
    //    console.log("Is login success: " + data);
    //    if (data) this.router.navigate(['/broadcaster']);
    //  })

    const val = this.loginForm.value;

    this.authService.login(val.email, val.password)
      .subscribe(
        () => { },
        err => {
          alert("Login failed!");
        }
    );

     const loginCredentials: Login = Object.assign({}, this.loginForm.value);
    this.LoginService.loginPost(loginCredentials);
    this.router.navigate(['/broadcaster']);
  }

}

