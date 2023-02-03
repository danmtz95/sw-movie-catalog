import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flatMap, forkJoin, mergeMap, Observable, of, reduce } from 'rxjs';
import { Character, Characters, Movies } from '../models/models';

interface SwapiResponse {
  count: number;
  next: string;
  previous: string;
  results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseApiUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }
  //the characters has pages this doesn't work
  getCharacters(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}`);
  }
  //the character doesn't have an id 
  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.baseApiUrl}` + id);
  }

  getCharacterByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }


  async getAllPeople(): Promise<any[]> {
    let people = [];
    let url = 'https://swapi.dev/api/people/';
    while (url) {
      let response = await this.http.get<SwapiResponse>(url).toPromise();
      if (response) {
        people.push(...response.results);
        url = response.next;
      } else {
        break;
      }
    }
    return people;
  }


}
