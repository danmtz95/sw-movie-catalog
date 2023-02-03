import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'list-movie', pathMatch: 'full' },
  { path: 'list-movie', component:ListMovieComponent},
  { path: 'movie/:id', component:MovieDetailComponent},
  { path: 'character', component:CharacterDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
