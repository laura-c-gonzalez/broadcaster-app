import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";
import { Login } from "../../login/Dto/login";

@Injectable()
export class AuthStore {

  isUserLoggedIn$: Observable<boolean> = of(false);

  login(email: string, password: string): Observable<any> {
    return this.isUserLoggedIn$ = of(email == 'testuser@email.com' && password == 'test')
      .pipe(
        tap(val => {
          localStorage.setItem('isUserLoggedIn', JSON.stringify(this.isUserLoggedIn$ ? "true" : "false"));
          console.log("User is logged in: " + val);
        })
      )
  }

  logout(): void {
    this.isUserLoggedIn$ = of(false);
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }
}
