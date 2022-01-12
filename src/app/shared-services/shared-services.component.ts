import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-services',
  templateUrl: './shared-services.component.html',
  styleUrls: ['./shared-services.component.css']
})
export class SharedServicesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
