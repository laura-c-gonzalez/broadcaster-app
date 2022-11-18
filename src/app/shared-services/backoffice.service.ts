import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, empty, expand, first, map, Observable, of, reduce, switchMap, tap, throwError } from 'rxjs';
import { Iartists } from '../home/Dto search/artists';
import { Isongs } from "../home/Dto search/songs";
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BackOfficeService {

  constructor(private http: HttpClient) { }

  url = '/api/payload/';


  getArtists(): Observable<Iartists[]> {
    return this.http.get<Iartists[]>(this.url);

  }


  getSongsById(id): Observable<any>{
    debugger;
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(
        map(d => d.id),
        tap(_ => console.log(`fetched hero id=${id}`)),
        shareReplay()
      );
  }

  searchLessons(search: string): Observable<Isongs[]> {
    return this.http.get<Isongs[]>(this.url, {
      params: {
        filter: search
      }
    })
  }

  loadAllCourses(value): Observable<any> {
/*    debugger;*/
    //return this.http.get<Isongs[]>(`/api/payload`)
    return this.http.get(`/api/payload?q=${value}`)
      //.pipe(
      //  map(d => d.),
      //  tap(_ => console.log(`fetched value=${value}`)),
      //  shareReplay()
      //)

      //.pipe(map((d: any) =>
      //  //console.log(d)
      //  //return d;
      //  //d.payload
      //  d.value
      //));
     


      
  }


}




//return this.http.get<Isongs>(`${this.url}/${id}`
