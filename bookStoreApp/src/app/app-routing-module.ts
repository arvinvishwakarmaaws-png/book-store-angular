import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Signup } from './auth/components/signup/signup';
import { Login } from './auth/components/login/login';
import { ChangePassword } from './auth/components/change-password/change-password';
import { AboutUs } from './about-us/about-us';
import { HowItWorks } from './how-it-works/how-it-works';

const routes: Routes = [
  {path: 'about-us', component: AboutUs},
  {path: 'how-it-works', component: HowItWorks}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
