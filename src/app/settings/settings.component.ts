import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  updateActivity(poem: string, stravaActivityId: number = 7259182174) {
    this.httpClient.put(environment.stravaConfig.apiUrl + "/activities/" + stravaActivityId, {
      name: "ăn tối 15 que!",
      description: poem
    }).subscribe((result: any) => {
      console.log(result)
    });
  }

  generatePoem() {
    const formData = new FormData();
    formData.append('theloai', "tho");
    formData.append('poemSubject', "amthuc.dat");
    formData.append('poemType', "Bốn chữ (vè)");
    formData.append('fullbaitho', "Thêm một khổ");
    formData.append('order', '0');
    var result = "";
    this.httpClient.post(environment.botThoApi, formData, { responseType: 'text' }).subscribe(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      result = doc.querySelectorAll('.contain-2 .paragraph')[0].innerHTML.replace(/<br\s*\/?>/mg, "\n");
      result = result.replace(/<[^>]*>?/gm, '');
      result = result.replace(/&nbsp;/g, '');
      result = result+ '- thơ được làm bởi con AI của chaydi.fun';
      this.updateActivity(result);
    })
  }

  subscription(){
    this.httpClient.post(environment.stravaConfig.apiUrl+"/push_subscriptions",{
      client_id:environment.stravaConfig.client_id,
      client_secret:environment.stravaConfig.client_secret,
      callback_url: environment.stravaConfig.subscriptions_callback_url,
      verify_token: "STRAVA"
    }).subscribe(data=>{
      console.log("subscription", data)
    })
  }

}
