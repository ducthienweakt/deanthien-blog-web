import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  token:any = ""
  name:any = "";
  ngOnInit(): void {
    this.token = localStorage.getItem('accessToken');
    this.name = localStorage.getItem('stravaName');
  }

  logginStravaEvent(token:string){
    this.token = localStorage.getItem('accessToken');
    this.name = localStorage.getItem('stravaName');
  }

  
}
