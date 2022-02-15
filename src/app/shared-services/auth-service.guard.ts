import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStore } from './auth-store/auth-store';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard implements CanActivate {

  constructor(private authStore: AuthStore,
    private router: Router) { }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    
    return this.authStore.isUserLoggedIn$
      .pipe(
        map(loggedIn =>
          loggedIn ? true : this.router.parseUrl('/broadcaster/login')))
  }
  
}
