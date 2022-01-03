import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedServiceModule } from '../shared-services/shared-service.module';
import { LoginComponent } from './login.component';


const loginRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(loginRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedServiceModule,

  ],
  exports: [RouterModule]
})
export class loginModule { }
