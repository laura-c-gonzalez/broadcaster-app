import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
