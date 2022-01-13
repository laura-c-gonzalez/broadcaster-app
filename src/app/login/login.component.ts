import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared-services/login.service';
import { Login } from './Dto/login';
import { createPasswordStrengthValidator } from './validators/password-strength.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private LoginService: LoginService,
    private router: Router) { }


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
    const loginCredentials: Login = Object.assign({},this.loginForm.value);
    this.LoginService.loginPost(loginCredentials);
    this.router.navigate(['/broadcaster']);

  }

}

