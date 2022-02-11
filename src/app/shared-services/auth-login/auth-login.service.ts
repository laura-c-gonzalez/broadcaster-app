import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";
import { Login } from "../../login/Dto/login";

export const UNKNOWN_USER: Login = {
  email: 'Unkown'
};

@Injectable()
export class AuthLoginService {

  isUserLoggedIn$: Observable<boolean> = of(false);

  login(email: string, password: string): Observable<any> {
    debugger;
    this.isUserLoggedIn$ = of(email == 'testuser@email.com' && password == 'test');
    localStorage.setItem('isUserLoggedIn', JSON.stringify(this.isUserLoggedIn$));

    return of(this.isUserLoggedIn$).pipe(
      delay(1000),
      tap(val => {
        console.log("User is logged in: " + val);
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn$ = of(false);
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }
}
