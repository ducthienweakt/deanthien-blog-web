import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { LoginStravaComponent } from './login-strava/login-strava.component';
import { StravaAuthComponent } from './strava-auth/strava-auth.component';
import { SettingsComponent } from './settings/settings.component';
import { StravaInterceptor } from './strava-interceptor';
import { RunAnimateComponent } from './run-animate/run-animate.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConnectStravaComponent } from './welcome/connect-strava/connect-strava.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginStravaComponent,
    StravaAuthComponent,
    SettingsComponent,
    RunAnimateComponent,
    WelcomeComponent,
    ConnectStravaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: StravaInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
