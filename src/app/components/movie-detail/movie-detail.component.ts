import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faNotFav, faEye as faNotWatched } from '@fortawesome/free-regular-svg-icons';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Character, Characters, Movie, StringDictionary } from 'src/app/models/models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  character_list: Character[] = [];
  character_on_movie: Characters[] = [];
  character_diccionario: StringDictionary<Character> = {};

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private charactersService: CharactersService, private location: Location) {
    this.movie = {
      characters: [],
      created: new Date(0),
      director: '',
      edited: new Date(0),
      episode_id: 0,
      opening_crawl: '',
      planets: [],
      producer: '',
      release_date: new Date(0),
      species: [],
      starships: [],
      title: '',
      url: '',
      vehicles: []
    }

  }

  ngOnInit() {
    this.getMovie();
  }


  // movie: Observable<Movie> | undefined;

  getMovie(): void {


    //this.company = this.rest.getCompanyFromSession();

    let id_movie = Number(this.route.snapshot.paramMap.get('id'));
    // this.is_loading = true;
    if (id_movie) {
      switch (id_movie) {
        case 4:
          id_movie = 1;
          break;
        case 5:
          id_movie = 2;
          break;
        case 6:
          id_movie = 3;
          break;
        case 1:
          id_movie = 4;
          break;
        case 2:
          id_movie = 5;
          break;
        case 3:
          id_movie = 6;
          break;
        default:
          break;
      }

      forkJoin({
        movie: this.moviesService.getMovieById(id_movie),
        character_list: this.charactersService.getCharacters()
      }).subscribe((responses) => {
        this.movie = responses.movie;
        this.character_list = responses.character_list.results;
        this.character_list.forEach((i) => {
          this.character_diccionario[i.url] = i;
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
