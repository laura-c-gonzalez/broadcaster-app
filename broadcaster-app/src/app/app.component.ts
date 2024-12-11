import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthStore } from './shared-services/auth-store/auth-store';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'broadcaster-app';

  constructor(public authStore: AuthStore,
    public router: Router
  ) { }

  logout() {
    this.authStore.logout();
    this.router.navigate(['/broadcaster/login']);
  }

}
