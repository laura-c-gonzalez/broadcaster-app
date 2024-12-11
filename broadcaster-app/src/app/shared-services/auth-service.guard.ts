import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStore } from './auth-store/auth-store';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard {
  //export class AuthServiceGuard implements CanActivate

  constructor(private authStore: AuthStore,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Observable<boolean | UrlTree>((observer) => {
      debugger
      this.authStore.isUserLoggedIn$.subscribe(
        loggedIn => {
          if (loggedIn) {
            observer.next(true);
          } else {
            observer.next(this.router.parseUrl('/broadcaster/login'));
          }
          observer.complete();
        }
      );
    });
  }

}
