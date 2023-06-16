import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-strava-auth',
  templateUrl: './strava-auth.component.html',
  styleUrls: ['./strava-auth.component.scss']
})
export class StravaAuthComponent implements OnInit{
  accessToken: string|null = "";

  constructor(private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    let code = this.route.snapshot.queryParamMap.get("code");
    if(code){
      this.getStravaAccessToken(code);
    }
  }

  getStravaAccessToken(code: string){
    this.httpClient.post(`https://www.strava.com/oauth/token`,{
      client_id:environment.starvaClientId,
      client_secret: environment.starvaClientSecret,
      code: code,
      grant_type: 'authorization_code'
    }).subscribe((result:any)=>{
      environment.stravaConfig.access_token = result.access_token;
      localStorage.setItem('accessToken',result.access_token)
      this.router.navigate(['/settings']);
    });

  }

}
