import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../shared-services/backoffice.service';
import { Observable, debounceTime, distinctUntilChanged, BehaviorSubject, map } from 'rxjs';
import { Isongs } from '../home/Dto search/songs';



@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent implements OnInit {

  songs$!: Observable<any>;

  private subjectKeyUp = new BehaviorSubject<any>([]);


  constructor(private backofficeService: BackOfficeService) { }

  ngOnInit(): void {

    this.subjectKeyUp.pipe(debounceTime(1000),
      distinctUntilChanged())
      .subscribe(d => {
        this.loadCourses(d);

      })
  }


  loadCourses(value: Isongs[]) {
    

    this.songs$ = this.backofficeService.loadAllCourses(value)


  }

  //playSong(song: Isongs): void {
  //  song.playCount++;
  //  //this.songs$ = this.backofficeService.updatePlayCount(song.id, song.playCount)

  //  //this.songs$ = this.backofficeService.updatePlayCount(song.id, song.playCount).subscribe(updatedSong => {
  //  //  // Handle updated song data if needed
  //  //})

  //}

}
