import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StravaAuthComponent } from './strava-auth.component';

describe('StravaAuthComponent', () => {
  let component: StravaAuthComponent;
  let fixture: ComponentFixture<StravaAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StravaAuthComponent]
    });
    fixture = TestBed.createComponent(StravaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
