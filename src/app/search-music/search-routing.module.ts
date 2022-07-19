import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
/*import { MusicDetailComponent } from './music-detail/music-detail.component';*/
import { SearchMusicComponent } from './search-music.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { GenreSearchComponent } from './genre-search/genre-search.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { MusicDetailResolver } from './services/music-detail.resolver';

const searchRoutes: Routes = [

  {
    path: 'musicUrl',
    component: MusicDetailComponent,
    resolve: {
      musicObj: MusicDetailResolver
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
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [RouterModule],
  providers: [
    MusicDetailResolver
  ]
})

export class SearchRoutingModule { }
