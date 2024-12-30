import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../../shared-services/backoffice.service';
import { Observable, debounceTime, distinctUntilChanged, BehaviorSubject, map } from 'rxjs';
import { Isongs } from '../Dto-songs/songs';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [NgFor, RouterModule, AsyncPipe],
  templateUrl: './music-detail.component.html',
  styleUrl: './music-detail.component.css'
})
export class MusicDetailComponent {
  songs$!: Observable<Isongs[]>;

  private subjectKeyUp = new BehaviorSubject<any>([]);

  //private subjectKeyUp = new Subject<any>();

  constructor(private backofficeService: BackOfficeService) { }

  ngOnInit() {

    this.subjectKeyUp.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(d => {
        this.loadCourses(d);
      })

  }

  onSearch($event: any) {

    const value = $event.target.value;
    this.subjectKeyUp.next(value);
    this.loadCourses(value);
  }

  loadCourses(value: string = '') {
    debugger
    //this.songs$ = this.backofficeService.getSongsById(id);

    this.songs$ = this.backofficeService.loadAllSongs(value);

  }

}

