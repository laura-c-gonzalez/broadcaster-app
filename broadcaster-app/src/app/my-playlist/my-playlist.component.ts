import { Component } from '@angular/core';
import { BackOfficeService } from '../shared-services/backoffice.service';
import { Observable, debounceTime, distinctUntilChanged, BehaviorSubject, map } from 'rxjs';
import { Isongs } from '../search-music/Dto-songs/songs';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-my-playlist',
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterModule],
  templateUrl: './my-playlist.component.html',
  styleUrl: './my-playlist.component.css'
})
export class MyPlaylistComponent {

  songs$!: Observable<Isongs[]>;
  songs: Isongs[] | undefined;

  constructor(private backofficeService: BackOfficeService) { }

  ngOnInit(): void {
    this.loadSongResults();
  }

  loadSongResults() {
    debugger;
    this.songs$ = this.backofficeService.loadAllSongs();

  }

  //private behavoiurSubject = new BehaviorSubject<any>([]);

  ////private subjectKeyUp = new Subject<any>(); cannot use Subject. Will not work

  //constructor(private backofficeService: BackOfficeService) { }

  //ngOnInit(): void {

  //  this.behavoiurSubject.pipe(debounceTime(1000),
  //    distinctUntilChanged())
  //    .subscribe(d => {
  //      this.loadCourses(d);
  //    })
  //}

  //loadCourses(value: Observable<any>) {
  // this.songs$ = this.backofficeService.loadAllCourses(value);
  //}

  //playSong(song: Isongs): void {
  //  song.playCount++;
  //  this.updateCount$ = this.backofficeService.updatePlayCount(song.id, song.playCount)
  //}

}


//this.songs$ = this.backofficeService.updatePlayCount(song.id, song.playCount).subscribe(updatedSong => {
//  // Handle updated song data if needed
//})
