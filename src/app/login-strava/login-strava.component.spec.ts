import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStravaComponent } from './login-strava.component';

describe('LoginStravaComponent', () => {
  let component: LoginStravaComponent;
  let fixture: ComponentFixture<LoginStravaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginStravaComponent]
    });
    fixture = TestBed.createComponent(LoginStravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
