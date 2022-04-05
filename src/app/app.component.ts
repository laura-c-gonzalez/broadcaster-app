import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap, fromEvent, debounceTime, of, distinctUntilChanged } from 'rxjs';
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

  artist$!: Observable<Iartists[]>;

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
        val => this.artist$ = of(val));
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

