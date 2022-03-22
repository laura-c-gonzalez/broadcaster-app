import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStore } from './auth-store';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements CanActivate {
  
  constructor(private authService: AuthStore, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> {
    debugger;
    return this.authService.isUserLoggedIn$
      .pipe(map(loggedIn => loggedIn ? true : this.router.parseUrl('/broadcaster')))
      
    }

}
