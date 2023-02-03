import { Component, OnInit } from '@angular/core';
import { Movie, Movies } from '../../models/models'
import { MoviesService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {
  movies: Movie[] = [];
  yetToWatchMovies: Movies[] = [];
  watchedMovies: Movies[] = [];

  films: Observable<any[]> | undefined;

  filterFilms = ''
  direction = 1;

  constructor(private moviesService: MoviesService) {
    moviesService.getMovies().subscribe(
      responseObject => {
        this.movies = responseObject.results;
        console.log(this.films)
      }
    )

  }

  sortList() {
    this.direction = -this.direction;
  }
    
  ngOnInit() {

  }

}
