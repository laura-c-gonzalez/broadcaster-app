import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { SearchMusicComponent } from './search-music.component';
import { MusicDetailResolver } from './services/music-detail.resolver';

const routes: Routes = [
  {
    path: "",
    component: SearchMusicComponent,
    children: [
      {
        path: "music/:musicNo",
        component: MusicDetailComponent,
        resolve: {
          music: MusicDetailResolver
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    MusicDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [
    MusicDetailResolver
  ]
})

export class SearchRoutingModule{ }
