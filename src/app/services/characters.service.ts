import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseApiUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}`);
  }
  //the character doesn't have an id 
  getCharacterById(id:number): Observable<any>{
    return this.http.get(`${this.baseApiUrl}`+id);
  }

  getCharacterByUrl(url:string): Observable<any>{
    return this.http.get(url);
  }

}
