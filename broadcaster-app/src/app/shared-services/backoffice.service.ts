import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Iartists } from '../search-music/Dto-artist/artists';
import { Isongs } from "../search-music/Dto-songs/songs";
import { shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BackOfficeService {

  constructor(private http: HttpClient) {

  }

  url = '/api/payload/';
  getUrl = '/api'


  getArtists(): Observable<Iartists[]> {
    return this.http.get<Iartists[]>(this.url);

  }


  getSongsById(id:string): Observable<any> {

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

  loadAllSongs(value: string = ''): Observable<Isongs[]> {


    return this.http.get<Isongs[]>(`/api/payload/?q=${value}`)
      .pipe(
        tap(_ => console.log(`fetched value q=${value}`)))


  }


  //put
  updatePlayCount(songId: number, updatedCount: number): Observable<Isongs> {
    debugger
    const urlPut = `http://localhost:3000/payload/${songId}`;
    // Send a PUT request to update the play count
    return this.http.put<Isongs>(urlPut, { playCount: updatedCount });
  }
}

