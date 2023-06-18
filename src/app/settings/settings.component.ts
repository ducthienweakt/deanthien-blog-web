import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export const POEM_TYPES = [
  { name: "Lục bát", value: "Lục bát" },
  { name: "Song thất lục bát", value: "Song thất lục bát" },
  { name: "Năm chữ", value: "Năm chữ (liên vận)" },
  { name: "Bốn chữ (vè)", value: "Bốn chữ (vè)" },
  { name: "Ba chữ", value: "Ba chữ" },
  { name: "Haiku", value: "Haiku" }
]
export const POEM_SUBJECTS = [
  { name: "Chạy xong ăn gì?", value: "amthuc.dat" },
  { name: "Loanh quanh Hà Nội", value: "tenpho.dat" },
  { name: "People make it complicated", value: "tienganh.dat" },
  { name: "Giáo xư chạy bộ", value: "vatly.dat" },
  { name: "Dâm thư", value: "trinhtung.dat" }
]

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private httpClient: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  stravaSettings: any = {};
  token: any = ""
  settingsForm = new FormGroup({
    hasTitle: new FormControl(true),
    title: new FormControl(''),
    hasPoem: new FormControl(true),
    poemType: new FormControl(),
    poemSubject: new FormControl(),
  });
  poemTypes = POEM_TYPES;
  poemSubjects = POEM_SUBJECTS;
  // Access formcontrols getter
  get poemType() {
    return this.settingsForm.get('poemType');
  }
  get poemSubject() {
    return this.settingsForm.get('poemSubject');
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('accessToken');
    if (!this.token) {
      this.router.navigate(['/']);
    } else {
      this.httpClient.get(environment.stravaConfig.apiUrl + '/athlete', { headers: { "Authorization": "Bearer " + this.token } }).subscribe((data: any) => {
        this.retrieveSettings(data.id);
      },
        () => {
          localStorage.clear()
          this.router.navigate(['/']);
        });

    }
  }


  retrieveSettings(stravaId: any) {
    this.stravaSettings = {attributes: {strava_id:stravaId}};
    this.httpClient.get(environment.apiUrl + '/strava-settings?filters[strava_id][$eq]=' + stravaId).subscribe((stravaResponse: any) => {
      if (stravaResponse.data && stravaResponse.data[0]) {
        this.stravaSettings = stravaResponse.data[0];
        this.settingsForm.patchValue({
          hasTitle: this.stravaSettings.attributes.has_update_title,
          title: this.stravaSettings.attributes.title_format,
          hasPoem: this.stravaSettings.attributes.has_poem,
          poemType: this.poemTypes.find(p=>p.value==this.stravaSettings.attributes.poem_type),
          poemSubject: this.poemSubjects.find(p=>p.value==this.stravaSettings.attributes.poem_subject)
        });
      } else {
        this.settingsForm.patchValue({
          hasTitle: true,
          title: "ăn {{time}} {{distance}} que!",
          hasPoem: true,
          poemType: this.poemTypes[0],
          poemSubject: this.poemSubjects[0]
        });
      }
    });
  }

  updateSettings() {
    let formValue = this.settingsForm.value;
    let data = {
      strava_id: this.stravaSettings.attributes.strava_id,
      has_update_title:formValue.hasTitle,
      title_format: formValue.title,
      has_poem: formValue.hasPoem,
      poem_type: formValue.poemType.value,
      poem_subject: formValue.poemSubject.value
    }

    if(this.stravaSettings.id){
      this.httpClient.put(environment.apiUrl + '/strava-settings/'+this.stravaSettings.id,{data:data}).subscribe((stravaResponse: any) => {
        this.stravaSettings = stravaResponse.data;
        window.alert("Cập nhật thành công!")
      });
    }
    else{
      this.httpClient.post(environment.apiUrl + '/strava-settings',{data:data}).subscribe((stravaResponse: any) => {
        this.stravaSettings = stravaResponse.data;
        window.alert("Cập nhật thành công!")
      });
    }

  }

}
