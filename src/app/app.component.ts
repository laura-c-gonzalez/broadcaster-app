import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStore } from './shared-services/auth-store/auth-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadcaster-app';
  constructor(public authStore: AuthStore,
    public router: Router) { }

  isLoggedIn$!: Observable<boolean>;

  ngOnInit() { }

  logout() {
    debugger;
    this.authStore.logout();
    this.router.navigate(['/broadcaster/login']);
  }

}
