import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerComponent} from './messenger.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';

describe('MessengerComponent', () => {
  let component: MessengerComponent;
  let fixture: ComponentFixture<MessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerComponent],
      imports: [MatIconModule, MatToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
