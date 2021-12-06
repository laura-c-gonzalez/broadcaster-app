import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadSongsComponent } from './upload-songs/upload-songs.component';
import { SearchMusicComponent } from './search-music/search-music.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { SharedServiceModule } from './shared-services/shared-service.module';
import { RegistrationComponent } from './login/registration/registration.component';
import { UploadFormComponent } from './upload-songs/upload-form/upload-form.component';
import { EditSongFormComponent } from './upload-songs/edit-song-form/edit-song-form.component';
import { GenreSearchComponent } from './search-music/genre-search/genre-search.component';
import { ArtistSearchComponent } from './search-music/artist-search/artist-search.component';
import { AuthLoginComponent } from './shared-services/auth-login/auth-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadSongsComponent,
    SearchMusicComponent,
    MyPlaylistComponent,
    MyStatsComponent,
    RegistrationComponent,
    UploadFormComponent,
    EditSongFormComponent,
    GenreSearchComponent,
    ArtistSearchComponent,
    AuthLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedServiceModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule
  ],
  exports: [
    AppComponent,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
