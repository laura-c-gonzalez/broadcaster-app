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


  getSongsById(id): Observable<Isongs>{
    debugger;
    return this.http.get<Isongs>(`${this.url}/${id}`)
      .pipe(
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

  loadAllCourses(value): Observable<Isongs> {
    debugger;
    //return this.http.get<Isongs[]>(`/api/payload`)
    return this.http.get<Isongs>(`/api/payload?${value}`)
      //.pipe(map((d: any) =>
        //console.log(d)
        //return d;
        //d.payload
      /*));*/
     


      
  }


}




//return this.http.get<Isongs>(`${this.url}/${id}`
