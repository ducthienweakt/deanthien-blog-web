import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-strava',
  templateUrl: './login-strava.component.html',
  styleUrls: ['./login-strava.component.scss']
})
export class LoginStravaComponent implements OnInit{
  url: string = "";

  ngOnInit(): void {
    this.url = "http://www.strava.com/oauth/authorize?client_id="+
    environment.starvaClientId+"&response_type=code&redirect_uri="+
    environment.appUrl+"/exchange_token&approval_prompt=auto&scope=read,activity:read_all,activity:write&state=test";
  }

}
