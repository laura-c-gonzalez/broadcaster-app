import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, observable, Observable } from 'rxjs';
import { Iartists } from './home/Dto search/artists';
import { Isongs } from './home/Dto search/songs';
import { AuthStore } from './shared-services/auth-store/auth-store';
import { BackOfficeService } from './shared-services/backoffice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadcaster-app';

  artist$!:any;
  songs$!: Observable<Isongs>;

  @ViewChild('searchInput')
    input!: ElementRef;

  constructor(public authStore: AuthStore,
    public router: Router,
    private route: ActivatedRoute,
    private backofficeService: BackOfficeService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    debugger;
    this.artist$ = this.http.get('/api/users')
      .subscribe(
      val => console.log(val))
    //this.artist$ =  this.backofficeService.getArtists()
    //  .pipe(
    //    map(res => res["users"])
    //  )
      
  }

  logout() {
    this.authStore.logout();
    this.router.navigate(['/broadcaster/login']);
  }

}
