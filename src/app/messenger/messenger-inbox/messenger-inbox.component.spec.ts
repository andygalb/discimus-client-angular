import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerInboxComponent} from './messenger-inbox.component';
import {MatIconModule} from '@angular/material';

describe('MessengerInboxComponent', () => {
  let component: MessengerInboxComponent;
  let fixture: ComponentFixture<MessengerInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerInboxComponent],
      imports: [MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
