import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../shared-services/auth-login/auth-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthLoginService, private router:Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/broadcaster/login']);
  }

}
