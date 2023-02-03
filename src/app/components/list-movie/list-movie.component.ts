import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/models'
import { MoviesService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {
  movies: Movies[] = [];
  yetToWatchMovies: Movies[] = [];
  watchedMovies: Movies[] = [];

  films: Observable<any[]> | undefined;

  filterFilms = ''

  constructor(private moviesService: MoviesService) {
    moviesService.getMovies().subscribe(
      responseObject => {
        this.films = responseObject.results;
        console.log(this.films)
      }
    )

  }

  // ordenarAsc(p_array_json, p_key) {
  //   p_array_json.sort(function (a, b) {
  //     return a[p_key] > b[p_key];
  //   });
  // }

  // sortJSON(data, key, orden) {
  //   return data.sort(function (a, b) {
  //     var x = a[key],
  //       y = b[key];

  //     if (orden === 'asc') {
  //       return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  //     }

  //     if (orden === 'desc') {
  //       return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  //     }
  //   });
  // }


  ngOnInit() {

  }

  // ngOnInit(): void {
  //   this.moviesService.getMovies().subscribe((movies) => this.movies = movies);
  // }

  ngDoCheck(): void {
    // if (this.movies.length && !this.watchedMovies.length) {
    //   this.yetToWatchMovies = this.movies.filter((m) => !m.isFav && !m.isWatched);
    //   this.watchedMovies = this.movies.filter((m) => m.isWatched);
    // }
  }

  onFavClick(movie: Movies): void {
    // this.moviesService.updateMovie({ ...movie, isFav: !movie.isFav, isWatched: movie.isFav ? true : movie.isWatched }).subscribe((updatedMovie) => {
    //   if (updatedMovie.isWatched) {
    //     const alreadyWatched = this.watchedMovies.find(movie => movie.id === updatedMovie.id);
    //     if (alreadyWatched) {
    //       alreadyWatched.isFav = updatedMovie.isFav
    //       this.watchedMovies = this.watchedMovies.map((m) => {
    //         if (m.id === updatedMovie.id) {
    //           return updatedMovie;
    //         }
    //         return m;
    //       })
    //     } else {
    //       this.watchedMovies.push(updatedMovie);
    //     }
    //     this.yetToWatchMovies = this.yetToWatchMovies.filter((m) => m.id !== updatedMovie.id);
    //   }
    //   else {
    //     this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
    //     this.yetToWatchMovies.push(updatedMovie);
    //   }
    // });
  }

  onWatchedClick(movie: Movies): void {
    // const payloadMovie = { ...movie, isWatched: !movie.isWatched };
    // payloadMovie.isFav = payloadMovie.isWatched ? payloadMovie.isFav : false;
    // this.moviesService.updateMovie(payloadMovie).subscribe((updatedMovie) => {
    //   if (updatedMovie.isWatched) {
    //     this.watchedMovies.push(updatedMovie);
    //     this.yetToWatchMovies = this.yetToWatchMovies.filter((m) => m.id !== updatedMovie.id)
    //   } else {
    //     this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
    //     this.yetToWatchMovies.push(updatedMovie);
    //   }
    // });
  }
}
