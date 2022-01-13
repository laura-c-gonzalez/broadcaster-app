import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../login/Dto/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  loginUrl = 'https://localhost:44374/api/Account/login';

  loginPost(loginUser: Login) {
    this.http.post<{ loginForm: string }>(this.loginUrl, loginUser)
      .subscribe(response => { console.log(response);})
  }

  getUsers(): Observable<Login[]> {
    return this.http.get<Login[]>('/api/Account/GetUsers');
  }
}
