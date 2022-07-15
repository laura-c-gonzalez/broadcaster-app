import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout/logout.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [RouterModule],
  providers: []
})
export class loginModule { }
