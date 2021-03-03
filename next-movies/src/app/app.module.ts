import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './core/movie/movie.component';
import {MovieDashboardComponent} from './core/movie-dashboard/movie-dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MoviePosterComponent} from './core/movie-poster/movie-poster.component';
import {DecodeHtmlDirective} from './core/directives/decode-html.directive';
import {FilterComponent} from './core/filters/filter/filter.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDashboardComponent,
    MoviePosterComponent,
    DecodeHtmlDirective,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
