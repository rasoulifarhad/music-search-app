import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  static BASE_URL = "https://api.spotify.com/v1";

  constructor(public http: HttpClient) { }

  getAlbum(id: string) : Observable<any[]> {
    return this.query(`/albums/${id}`);
  }

  getArtist(id: string) : Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getTrack(id : string) : Observable<any[]> {
    return this.query(`/tracks/${id}`)
  }

  searchTrack(query: string) : Observable<any[]>{
    return this.search(query, "track")
  }

  search(query: string, type: string) : Observable<any[]> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`])
  }

  query(URL: string, params?: Array<string>) : Observable<any> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if(params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }

    const apiKey = environment.spotifyApiKey;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`
    });

    const options = {
      headers : headers
    }

    return this.http.get(queryURL, options);
  }

}
