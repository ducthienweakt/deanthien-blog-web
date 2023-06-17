import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectStravaComponent } from './connect-strava.component';

describe('ConnectStravaComponent', () => {
  let component: ConnectStravaComponent;
  let fixture: ComponentFixture<ConnectStravaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectStravaComponent]
    });
    fixture = TestBed.createComponent(ConnectStravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
