import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Iartists } from '../home/Dto search/artists';


@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {
  log: any;

  constructor(private http: HttpClient) { }

  urlArtists = '/api/users';
  urlSongs = '/api/musicUploads';



  getArtists(): Observable<Iartists[]> {
    debugger;
    return this.http.get<Iartists[]>(this.urlArtists);
     
  }

  getArtistById(id: number): Observable<Iartists> {
    return this.http.get<Iartists>(`${this.urlArtists}/${id}`) as Observable<Iartists>;
  }

}
