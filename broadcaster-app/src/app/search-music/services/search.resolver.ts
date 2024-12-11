import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AllInOneModuleModule } from '../../shared-services/all-in-one-module/all-in-one-module.module';
import { ArtistSearchComponent } from '../artist-search/artist-search.component';
import { GenreSearchComponent } from '../genre-search/genre-search.component';
import { MusicDetailComponent } from '../music-detail/music-detail.component';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [
    MusicDetailComponent,
    GenreSearchComponent,
    ArtistSearchComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    AllInOneModuleModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    /*MusicDetailResolver*/
  ]
})
export class searchModule { }
