import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessagesComponent} from './messages.component';
import {MessengerComponent} from '../messenger/messenger.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {MessengerInboxComponent} from '../messenger/messenger-inbox/messenger-inbox.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent, MessengerComponent, MessengerInboxComponent],
      imports: [MatIconModule, MatToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
