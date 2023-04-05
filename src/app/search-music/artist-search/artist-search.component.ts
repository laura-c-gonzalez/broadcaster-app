import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  
  @ViewChild('gridView')
  gridView: any;

  columnNum = 3;

  constructor() { }

  ngOnInit(): void {

  }

  setColNum() {
    
    if (this.gridView.nativeElement.offsetWidth < 400) {
      this.columnNum = 1;
    }

    if (this.gridView.nativeElement.offsetWidth >= 400
      && this.gridView.nativeElement.offsetWidth < 800) {
      this.columnNum = 2;

    }
    if (this.gridView.nativeElement.offsetWidth >= 800) {
      this.columnNum = 3;

    }
  }

}
