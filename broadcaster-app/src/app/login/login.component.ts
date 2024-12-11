import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from './Dto-login/login';
import { Router } from '@angular/router';
import { AuthStore } from '../shared-services/auth-store/auth-store';
import { CommonModule, JsonPipe, NgClass, NgIf } from '@angular/common';
import { OnlyOneErrorPipe } from '../pipes/only-one-error.pipe';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, OnlyOneErrorPipe, CommonModule, JsonPipe, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email!: string;
  password!: string;

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    public authStore: AuthStore) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['testuser@email.com', [Validators.required]],
      password: ['test', [Validators.required]]

      //validators required when user submitting login info!!
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
    const val = this.loginForm.value;

    this.authStore.login(val.email, val.password)
      .subscribe(
        () => {
          this.router.navigate(['/broadcaster'])
        },
        err => {
          alert("Login failed!");
        }
      );
  }

}
