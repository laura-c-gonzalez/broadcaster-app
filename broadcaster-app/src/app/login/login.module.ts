import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout/logout.component';
import { OnlyOneErrorPipe } from '../pipes/only-one-error.pipe';


const loginRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    LogoutComponent,
    RegistrationComponent
    
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OnlyOneErrorPipe
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class loginModule { }
