import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { AboutUs } from './about-us/about-us';
import { HowItWorks } from './how-it-works/how-it-works';
import { AuthModule } from './auth/auth-module';
import { PublicModule } from './public/public-module';
import { SharedModule } from './shared/shared-module';
import { UserModule } from './user/user-module';

@NgModule({
  declarations: [App, AboutUs, HowItWorks],
  imports: [BrowserModule, AppRoutingModule, AuthModule, PublicModule, SharedModule, UserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
