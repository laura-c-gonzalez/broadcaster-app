import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from './shared-services/account.service';
import { AuthLoginService, UNKNOWN_USER } from './shared-services/auth-login/auth-login.service';
import { map } from 'rxjs/operators';
import { Login } from './login/Dto/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadcaster-app';
  constructor() { }

  isLoggedIn$!: Observable<boolean>;

  ngOnInit() {
    
  }


  
 }
