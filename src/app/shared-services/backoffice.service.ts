import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iartists } from '../home/Dto search/artists';


@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {

  constructor(private http: HttpClient) { }

  urlArtists = 'http://localhost:3000/users';
  urlSongs = 'http://localhost:3000/musicUploads';

  getArtists(): Observable<Iartists[]> {
    return this.http.get<Iartists[]>(this.urlArtists) as Observable<Iartists[]>;
  }

  getArtistById(id: number): Observable<Iartists> {
    return this.http.get<Iartists>(`${this.urlArtists}/${id}`) as Observable<Iartists>;
  }

}
