import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from './validators/password-strength.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }],

      password: ['', [Validators.required,
      Validators.minLength(8),
      createPasswordStrengthValidator()
      ]],
    });
  }

  get emailControl() {
    return this.loginForm.controls['email'];
  }
  get passwordControl() {
    return this.loginForm.controls['password'];
  }


}

