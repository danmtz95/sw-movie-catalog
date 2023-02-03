import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
    declarations: [
        AppComponent,
        ListMovieComponent,
        MovieDetailComponent,
        FilterPipe,
        HeaderComponent,
        CharacterDetailComponent,
        ToolBarComponent,
        // ButtonComponent,
        // CharacterDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        TooltipModule,
        NgbTooltipModule
    ]
})
export class AppModule { }
