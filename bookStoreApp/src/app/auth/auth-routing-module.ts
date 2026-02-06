import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { ChangePassword } from './components/change-password/change-password';

const routes: Routes = [
  {path: 'auth', component: Auth, children: [
    {path: 'sign-up', component: Signup},
    {path: 'sign-in', component: Login},
    {path: 'change-password', component: ChangePassword}
  ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
