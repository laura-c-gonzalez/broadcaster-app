import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, empty, expand, map, Observable, of, reduce, switchMap, tap } from 'rxjs';
import { Iartists } from '../home/Dto search/artists';
import { Isongs } from "../home/Dto search/songs";
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BackOfficeService {

  constructor(private http: HttpClient) { }

  url = '/api/payload';


  getArtists(): Observable<Iartists[]> {
    return this.http.get<Iartists[]>(this.url);

  }


  getArtistById(id: number): Observable<Iartists> {
    return this.http.get<Iartists>(`${this.url}/${id}`) as Observable<Iartists>;
  }

  searchLessons(search: string): Observable<Isongs[]> {
    return this.http.get<Isongs[]>(this.url, {
      params: {
        filter: search
      }
    })
  }

  loadMusicDetail(musicUrl) {
    return this.http.get<Isongs>(this.url, {
      params: {
        musicUrl
      }
    })
      .pipe(
        shareReplay()
      );
  }

}
