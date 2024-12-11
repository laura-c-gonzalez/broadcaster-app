import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStore } from './auth-store';

@Component({
  selector: 'app-auth-store',
  standalone: true,
  imports: [],
  templateUrl: './auth-store.component.html',
  styleUrl: './auth-store.component.css'
})
export class AuthStoreComponent {
  //export class AuthLoginComponent implements CanActivate

  //canActivate(route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot):
  //  boolean | UrlTree | Observable<boolean | UrlTree> {
  //  debugger;
  //  return this.authService.isUserLoggedIn$
  //    .pipe(map(loggedIn => loggedIn ? true : this.router.parseUrl('/broadcaster')))

  //}


  constructor(private authService: AuthStore,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Observable<boolean | UrlTree>((observer) => {
      debugger
      this.authService.isUserLoggedIn$.subscribe(
        loggedIn => {
          if (loggedIn) {
            observer.next(true);
          } else {
            observer.next(this.router.parseUrl('/broadcaster'));
          }
          observer.complete();
        }
      );
    });
  }

}
