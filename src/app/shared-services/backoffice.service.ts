import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, empty, expand, map, Observable, of, reduce, switchMap, tap } from 'rxjs';
import { Iartists } from '../home/Dto search/artists';


@Injectable({
  providedIn: 'root'
})


export class BackOfficeService {

  constructor(private http: HttpClient) { }

  urlArtists = '/api/users';


  getArtists(): Observable<Iartists[]> {
    return this.http.get<Iartists[]>(this.urlArtists);
  }


  getArtistById(id: number): Observable<Iartists> {
    return this.http.get<Iartists>(`${this.urlArtists}/${id}`) as Observable<Iartists>;
  }

}
