import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; //for reactive approach
import { Routes, RouterModule } from '@angular/router';
import { SharedServiceModule } from '../shared-services/shared-service.module';
import { EditSongFormComponent } from './edit-song-form/edit-song-form.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadSongsComponent } from './upload-songs.component';

const uploadRoutes: Routes = [
  {path: '', component: UploadSongsComponent},
  { path: 'form/new', component: UploadFormComponent },
  { path: 'edit/:id', component: EditSongFormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(uploadRoutes),
    SharedServiceModule
  ],
  exports: [RouterModule]
})

export class uploadSongsModule {}
