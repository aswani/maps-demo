import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDimComponent } from './time-dim.component';

describe('TimeDimComponent', () => {
  let component: TimeDimComponent;
  let fixture: ComponentFixture<TimeDimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
