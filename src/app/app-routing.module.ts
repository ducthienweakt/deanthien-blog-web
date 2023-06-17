import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginStravaComponent } from './login-strava/login-strava.component';
import { StravaAuthComponent } from './strava-auth/strava-auth.component';
import { SettingsComponent } from './settings/settings.component';
import { RunAnimateComponent } from './run-animate/run-animate.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component:WelcomeComponent},
  { path:  'exchange_token', component:  StravaAuthComponent},
  { path:  'settings', component:  SettingsComponent},
  { path:  '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
