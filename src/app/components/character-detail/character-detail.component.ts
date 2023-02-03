import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/services/movies.service';
import { forkJoin } from 'rxjs';
import { Character, Movie, Planet, StringDictionary } from 'src/app/models/models';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {


  character: Character;

  movie_list: Movie[] = [];
  movie_diccionario: StringDictionary<Movie> = {};

  planet_list: Planet[] = [];
  planet_diccionario: StringDictionary<Planet> = {};

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private charactersService: CharactersService, private planetsService: PlanetsService, private location: Location) {
    this.character = {
      name: '',
      height: 0,
      mass: 0,
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: new Date(0),
      edited: new Date(0),
      url: ''
    }
    
  }
  ngOnInit() {
    this.getCharacter();
  }


  getCharacter(): void {
    // let url_character = this.route.snapshot.paramMap.get('url');
    let url_character = this.route.snapshot.queryParams['url'];
    console.log(url_character);
    // let url_character = this.route.snapshot.queryParams['url'];
    if (url_character) {

      forkJoin({
        character: this.charactersService.getCharacterByUrl(url_character),
        movie_list: this.moviesService.getMovies(),
        planet_list: this.planetsService.getAllPlanets()
      }).subscribe((responses) => {
        this.character = responses.character;
        this.movie_list = responses.movie_list.results;
        this.planet_list = responses.planet_list;
        this.movie_list.forEach((i) => {
          this.movie_diccionario[i.url] = i;
        });

        this.planet_list.forEach((i) => {
          this.planet_diccionario[i.url] = i;
        });
        // this.moviesService.getMovieById(id_movie)
        //   .subscribe(
        //     responseObject => {
        //       this.movie = responseObject;
        //     }
        //   );
      })
    }
  }

}
