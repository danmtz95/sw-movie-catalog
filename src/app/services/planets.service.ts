import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private baseApiUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}`);
  }

}
