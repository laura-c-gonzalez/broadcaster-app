import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Iartists } from '../home/Dto search/artists';
import { Isongs } from "../home/Dto search/songs";
import { shareReplay } from 'rxjs';
import * as low from 'lowdb';
//import * as FileSync from 'node_modules/json-server/node_modules/lowdb/adapters/FileSync';
//import FileSync from 'lowdb/adapters/FileSync';



@Injectable({
  providedIn: 'root'
})


export class BackOfficeService {

  //private adapter = new FileSync('db.json');
  //private db = low(this.adapter);

  constructor(private http: HttpClient) {
    
  }

  url = '/api/payload/';
  getUrl = '/api'


  getArtists(): Observable<Iartists[]> {
    return this.http.get<Iartists[]>(this.url);

  }


  getSongsById(id): Observable<any> {

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

  loadAllCourses(value): Observable<Isongs> {
    
    return this.http.get<Isongs>(`/api/payload/?q=${value}`)

  }

  
  //put
  //updatePlayCount(songId: number, updatedCount: number): Observable<Isongs> {
  //  debugger
  //  const urlPut = `http://localhost:3000/payload/${songId}`;
  //  // Send a PUT request to update the play count
  //  return this.http.put<Isongs>(urlPut, { playCount: updatedCount });
  //}
}




