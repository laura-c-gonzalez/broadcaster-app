import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BackOfficeService } from '../../shared-services/backoffice.service';
import { Iartists } from '../../home/Dto search/artists';
import { Isongs } from '../../home/Dto search/songs';
import { Observable, map, switchMap, fromEvent, debounceTime, distinctUntilChanged, noop, concat, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStore } from '../../shared-services/auth-store/auth-store';
import { createHttpObservable } from '../../shared-services/utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  artists$!: Observable<Iartists[]>;

  songData;

  http$!: Observable<Isongs>;

  songs$!: Observable<Isongs[]>;

  isVisible: boolean = false;

  @ViewChild('searchInput')
  searchInput!: ElementRef;

  constructor(public authStore: AuthStore,
    public router: Router,
    private route: ActivatedRoute,
    private backofficeService: BackOfficeService,
    private http: HttpClient
  ) { }

  ngOnInit() {


    this.songData = this.route.snapshot.data["musicObj"];


    this.songs$ = createHttpObservable(`/api/payload / ${this.songData}`);

    console.log("this.songs$"+ this.songs$)


    //http$.subscribe(
    //  search => console.log(search),
    //  noop,
    //  () => console.log('completed')
    //);
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

    this.songs$ = concat(initialArtists$, searchArtists$);

  }

  loadArtists(search = ''): Observable<Isongs[]>{


    let result = createHttpObservable(`/api/payload${this.songData}&filter=${search}`);

    return createHttpObservable(`/api/payload?musicObj=${this.songData}&filter=${search}`)
      //.pipe(
      //  map((res: Isongs)=> res["payload"])
      //)
  }

}
