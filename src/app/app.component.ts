import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStore } from './shared-services/auth-store/auth-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadcaster-app';
  constructor(public authStore:AuthStore) { }

  isLoggedIn$!: Observable<boolean>;

  ngOnInit() {
    
  }

  logout() {
    this.authStore.logout();
  }
  
 }
