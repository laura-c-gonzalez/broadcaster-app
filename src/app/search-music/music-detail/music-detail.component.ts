import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../../shared-services/backoffice.service';
import { Observable, debounceTime, distinctUntilChanged, BehaviorSubject } from 'rxjs';

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

  onSearch($event: any) {

    const value = $event.target.value;
    //this.subjectKeyUp.next(value);
    console.log(value);
    this.loadCourses(value);
  }

  loadCourses(value: Observable<any>) {
    console.log("result of load courses " + this.songs$)

    //this.songs$ = this.backofficeService.getSongsById(id);

    this.songs$ = this.backofficeService.loadAllCourses(value);

    //  this.backofficeService.loadAllCourses(value).subscribe(
    //    d => { console.log(d)
    //    },
    //    error => {
    //    console.error(error);
    //  })
  }

}
