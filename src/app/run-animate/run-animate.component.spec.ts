import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunAnimateComponent } from './run-animate.component';

describe('RunAnimateComponent', () => {
  let component: RunAnimateComponent;
  let fixture: ComponentFixture<RunAnimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunAnimateComponent]
    });
    fixture = TestBed.createComponent(RunAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
