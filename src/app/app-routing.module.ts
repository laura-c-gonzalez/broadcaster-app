
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { AuthServiceGuard } from './shared-services/auth-service.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/broadcaster/login',
    pathMatch: 'full'
  },
  {
    path: 'broadcaster',
    component: HomeComponent,
    canActivate: [AuthServiceGuard]
    
  },
  {
    path: 'broadcaster/login',
    canActivate: [],
    loadChildren: () => import('./login/login.module').then(m => m.loginModule)
  },
  {
    path: 'broadcaster/upload',
    loadChildren: () => import('./upload-songs/upload-songs.module').then(mod => mod.uploadSongsModule)
  },
  {
    path: 'broadcaster/search',
    loadChildren: () => import('./search-music/search.module').then(mod => mod.searchModule)
  },
  { path: 'broadcaster/my-playlist', component: MyPlaylistComponent },
  { path: 'broadcaster/stats', component: MyStatsComponent },

];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [
    AuthServiceGuard
  ]
})
export class AppRoutingModule { }
