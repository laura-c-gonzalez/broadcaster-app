import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../../shared-services/backoffice.service';
import { Observable, debounceTime, distinctUntilChanged, BehaviorSubject, map } from 'rxjs';
import { Isongs } from '../../home/Dto search/songs';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  songs$!: Observable<any>;

  private subjectKeyUp = new BehaviorSubject<any>([]);

  //private subjectKeyUp = new Subject<any>();

  constructor(private backofficeService: BackOfficeService) { }

  ngOnInit() {

    this.subjectKeyUp.pipe(debounceTime(1000),
      distinctUntilChanged())
      .subscribe(d => {
        this.loadCourses(d);
      })

  }

  onSearch($event:any) {

    const value = $event.target.value;
    this.subjectKeyUp.next(value);
    this.loadCourses(value);
  }

  loadCourses(value: Observable<any>) {
  
    //this.songs$ = this.backofficeService.getSongsById(id);

    this.songs$ = this.backofficeService.loadAllCourses(value)
 
  }

}

