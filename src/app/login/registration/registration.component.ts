import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    artistName:['', [Validators.required, Validators.maxLength(8)]],
    email: ['', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }],
    newPassword: ['', [Validators.required,
    Validators.minLength(8),
    createPasswordStrengthValidator()
    ]],
    confirmPassword: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
    gridCheck: ['', Validators.required]
  })

  get artistNameControl() {
    return this.registrationForm.controls['artistName'];
  }

  get emailControl() {
    return this.registrationForm.controls['email'];
  }
  get newPasswordControl() {
    return this.registrationForm.controls['newPassword'];
  }
  get confirmPasswordControl() {
    return this.registrationForm.controls['confirmPassword'];
  }

//checkPasswords(group: any) {
//  const pass = this.newPasswordControl.value;
//  const confirmPass = this.confirmPasswordControl.value;

//  return pass === confirmPass ? null : { notSame: true };

//}

  //confirmPassword: ['', { validators: [Validators.required] },
  //  { validator: this.checkPasswords }],

  ngOnInit(): void {
  }

}
