import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap, fromEvent, debounceTime, of, distinctUntilChanged, tap } from 'rxjs';
import { Artists, Iartists } from './home/Dto search/artists';
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

  artists: Iartists[] = [];


  songs$!: Observable<Isongs>;

  isVisible: boolean = false;

  @ViewChild('searchInput')
  searchInput!: ElementRef;

  constructor(public authStore: AuthStore,
    public router: Router,
    private route: ActivatedRoute,
    private backofficeService: BackOfficeService
  ) { }

  ngOnInit() {
    debugger;

    this.backofficeService.getArtists()
      .subscribe(
        (res) => {
          this.artists = res;
          console.log(this.artists);
        },
        err => console.log(err),
        () => console.log('complete')
      )




    //  .pipe(
    //    map(res => Object.values(res["payload"]))
    //  )
    //console.log(this.artist$);

  }

  logout() {
    this.authStore.logout();
    this.router.navigate(['/broadcaster/login']);

  }

  ngAfterViewInit() {
    debugger;
    fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        /*  switchMap()*/
      )
      .subscribe(console.log)
  }
}

