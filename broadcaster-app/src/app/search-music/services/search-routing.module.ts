import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { MusicDetailComponent } from './music-detail/music-detail.component';*/
import { SearchMusicComponent } from '../search-music.component';
import { MusicDetailComponent } from '../music-detail/music-detail.component';
import { GenreSearchComponent } from '../genre-search/genre-search.component';
import { ArtistSearchComponent } from '../artist-search/artist-search.component';

const searchRoutes: Routes = [

  {
    path: '',
    component: SearchMusicComponent,
  },
  //{
  //  path: '',
  //  redirectTo: 'search',
  //  pathMatch: 'full'
  //},
  {
    path: 'music',
    component: MusicDetailComponent,
    resolve: {
      //musicObj: MusicDetailResolver
    }
  },
  {
    path: 'search/genre',
    component: GenreSearchComponent
  },
  {
    path: 'search/artist',
    component: ArtistSearchComponent
  }
  //http://localhost:4200/broadcaster/search/search/artist
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(searchRoutes),

  ],
  exports: [
    RouterModule,

  ],
  providers: [
    //MusicDetailResolver
  ]
})

export class SearchRoutingModule { }
