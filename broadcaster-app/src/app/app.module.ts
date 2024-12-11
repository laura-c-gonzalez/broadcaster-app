import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, JsonPipe } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadSongsComponent } from './upload-songs/upload-songs.component';
import { SearchMusicComponent } from './search-music/search-music.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MyStatsComponent } from './my-stats/my-stats.component';
//import { RegistrationComponent } from './login/registration/registration.component';
//import { UploadFormComponent } from './upload-songs/upload-form/upload-form.component';
import { LoginComponent } from './login/login.component';
import { AuthStore } from './shared-services/auth-store/auth-store';
import { LogoutComponent } from './login/logout/logout.component';
import { loginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UploadSongsComponent,
    SearchMusicComponent,
    MyPlaylistComponent,
    MyStatsComponent,
    //RegistrationComponent,
    //UploadFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    loginModule,
    RouterModule,
    HttpClientModule
    //BrowserAnimationsModule,
    //AllInOneModuleModule
  ],
  exports: [
    AppComponent,
  ],
  providers: [AuthStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
