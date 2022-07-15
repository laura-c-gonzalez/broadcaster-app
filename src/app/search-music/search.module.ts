import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { GenreSearchComponent } from './genre-search/genre-search.component';
import { SearchMusicComponent } from './search-music.component';
import { SearchRoutingModule } from './search-routing.module';
import { MusicDetailComponent } from './music-detail/music-detail.component';

const searchRoutes: Routes = [
  { path: '', component: SearchMusicComponent },
  { path: 'search/genre', component: GenreSearchComponent },
  { path: 'search/artist', component: ArtistSearchComponent}
];

@NgModule({
  declarations: [
    MusicDetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(searchRoutes),
    SearchRoutingModule
  ],
  exports: [RouterModule]
})
export class searchModule {}
