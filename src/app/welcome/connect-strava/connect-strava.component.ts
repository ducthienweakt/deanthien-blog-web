import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'connect-strava',
  templateUrl: './connect-strava.component.html',
  styleUrls: ['./connect-strava.component.scss']
})
export class ConnectStravaComponent implements OnInit {

  @Output() loggingStravaEvent = new EventEmitter<string>();
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    let code = this.route.snapshot.queryParamMap.get("code");
    if (code) {
      this.getStravaAccessToken(code);
    }
  }

  onConnectStravaClick(event: any) {
    window.location.href = "http://www.strava.com/oauth/authorize?client_id=" +
      environment.starvaClientId + "&response_type=code&redirect_uri=" +
      environment.appUrl + "&approval_prompt=auto&scope=read,activity:read_all,activity:write&state=test";

  }

  getStravaAccessToken(code: string) {
    this.httpClient.post(`https://www.strava.com/oauth/token`, {
      client_id: environment.starvaClientId,
      client_secret: environment.starvaClientSecret,
      code: code,
      grant_type: 'authorization_code'
    }).subscribe(async (result: any) => {
      localStorage.setItem('accessToken', result.access_token);
      localStorage.setItem('stravaName', result.athlete.firstname + " " + result.athlete.lastname);
      this.loggingStravaEvent.emit(result.access_token);
      let strava_id = result.athlete.id;
      let data = {
        access_token: result.access_token,
        refresh_token: result.refresh_token,
        strava_id: strava_id
      }

      this.httpClient.get(environment.apiUrl + '/strava-users?filters[strava_id][$eq]=' + strava_id).subscribe((stravaResponse: any) => {
        // update strava token
        if (stravaResponse.data && stravaResponse.data[0]) {
          let stravaUser = stravaResponse.data[0];

          this.httpClient.put(environment.apiUrl + '/strava-users/' + stravaUser.id, { data: data }).subscribe(saveSuccess => {
            this.router.navigate(['/']);
          })
        } else {
          this.httpClient.post(environment.apiUrl + '/strava-users/', { data: data }).subscribe(saveSuccess => {
            this.router.navigate(['/']);
          })
        }
      });


      //update token


    });

  }
}
