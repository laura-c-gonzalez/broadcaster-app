import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { GenreSearchComponent } from './genre-search/genre-search.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { SearchRoutingModule } from './search-routing.module';
import { PrevDirective } from '../shared-services/multi-slide/prev.directive';
import { NextDirective } from '../shared-services/multi-slide/next.directive';



@NgModule({
  declarations: [
    MusicDetailComponent,
    GenreSearchComponent,
    ArtistSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    PrevDirective,
    NextDirective
  ],
  exports: [RouterModule],
  providers: [
    /*MusicDetailResolver*/
  ]
})
export class searchModule {}
