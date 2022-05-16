import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap, fromEvent, debounceTime, of, distinctUntilChanged, tap, noop, concatMap, mergeMap, concat, exhaustMap, filter } from 'rxjs';
import { Artists, Iartists } from './home/Dto search/artists';
import { Isongs } from './home/Dto search/songs';
import { AuthStore } from './shared-services/auth-store/auth-store';
import { BackOfficeService } from './shared-services/backoffice.service'
import { createHttpObservable } from './shared-services/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadcaster-app';

  artists$!: Observable<Iartists[]>;
/*  artists: any[] = [];*/

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
    const http$ = createHttpObservable('/api/payload');
    


    http$.subscribe(
      search => console.log(search),
      noop,
      () => console.log('completed')
    );
  }

  logout() {
    this.authStore.logout();
    this.router.navigate(['/broadcaster/login']);

  }

  ngAfterViewInit() {
   const searchArtists$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(search => this.loadArtists(search))
    );

    const initialArtists$ = this.loadArtists();

    this.artists$ = concat(initialArtists$, searchArtists$);
     
  }

  loadArtists(search = ''): Observable<Iartists[]> {

    return createHttpObservable(`/api/payload$filter$(search)`)
      .pipe(
        map((res: Iartists) => res[0].users)
      )
  }
}


//this.backofficeService.getArtists()
//  .subscribe(
//    (res) => {
//      this.artists = res;
//      console.log(this.artists);
//    },
//    err => console.log(err),
//    () => console.log('complete')
//  )
