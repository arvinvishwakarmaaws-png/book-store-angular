import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { ChangePassword } from './components/change-password/change-password';
import { Auth } from './auth';
import { RouterOutlet } from '@angular/router';
import { AuthRoutingModule } from './auth-routing-module';



@NgModule({
  declarations: [
    Login,
    Signup,
    ChangePassword,
    Auth
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AuthRoutingModule
  ]
})
export class AuthModule { }
