import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
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
