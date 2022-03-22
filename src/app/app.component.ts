import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iartists } from './home/Dto search/artists';
import { Isongs } from './home/Dto search/songs';
import { AuthStore } from './shared-services/auth-store/auth-store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadcaster-app';

  artist$!: Observable<Iartists>;
  songs$!: Observable<Isongs>;

  @ViewChild('searchInput')
    input!: ElementRef;

  constructor(public authStore: AuthStore,
    public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  logout() {
    this.authStore.logout();
    this.router.navigate(['/broadcaster/login']);
  }

}
