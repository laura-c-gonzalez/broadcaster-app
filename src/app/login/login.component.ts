import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from './validators/password-strength.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', {
      Validators: [Validators.required, Validators.email],
      updateOn:'blur'
      }],
    password: ['', [Validators.required, Validators.minLength(8),
      createPasswordStrengthValidator()
    ]],
  });

  constructor(private fb: FormBuilder) { }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.controls['email']; }
  get password() { return this.loginForm.controls['password'];;}

}
