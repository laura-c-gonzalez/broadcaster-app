import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    //const hasUpperCase = /[A-Z]+/.test(value);

    //const hasLowerCase = /[a-z]+/.test(value);

    //const hasNumeric = /[0-9]+/.test(value);

    //const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    //return !passwordValid ? { invalidPassword: true } : null;

    const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');

    const valid = regex.test(control.value);
    return !valid ? { invalidPassword: true } : null;

   
  }
}
//The password should be a minimum of eight characters long.
//It has at least one lower case letter.
//It has at least one upper case letter.
//It has at least one number.
