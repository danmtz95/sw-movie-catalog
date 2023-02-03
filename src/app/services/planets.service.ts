import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SwapiResponse {
  count: number;
  next: string;
  previous: string;
  results: any[];
}

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {
  private baseApiUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}`);
  }

  async getAllPlanets(): Promise<any[]> {
    let planets = [];
    let url = 'https://swapi.dev/api/planets/';
    while (url) {
      let response = await this.http.get<SwapiResponse>(url).toPromise();
      if (response) {
        planets.push(...response.results);
        url = response.next;
      } else {
        break;
      }
    }
    return planets;
  }

}
