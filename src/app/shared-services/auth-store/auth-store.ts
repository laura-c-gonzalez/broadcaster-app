import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";
import { Login } from "../../login/Dto/login";

export const UNKNOWN_USER: Login = {
  email: 'Unkown'
};

@Injectable()
export class AuthStore {

  isUserLoggedIn$: Observable<boolean> = of(false);

  login(email: string, password: string): Observable<any> {
    debugger;
    return this.isUserLoggedIn$ = of(email == 'testuser@email.com' && password == 'test')
      .pipe(
        tap(val => {
          debugger;
          localStorage.setItem('isUserLoggedIn', JSON.stringify(this.isUserLoggedIn$ ? "true" : "false"));
          console.log("User is logged in: " + val);
        })
      )
    


    //return of(this.isUserLoggedIn$).pipe(
    //  delay(1000),
    //  tap(val => {
    //    debugger;
    //    localStorage.setItem('isUserLoggedIn', JSON.stringify(this.isUserLoggedIn$ ? "true" : "false"));
    //    console.log("User is logged in: " + val);
    //  })
    //);
  }

  logout(): void {
    this.isUserLoggedIn$ = of(false);
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }
}
