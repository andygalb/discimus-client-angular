import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessagesComponent} from './messages.component';
import {MessengerComponent} from '../messenger/messenger.component';
import {MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MessengerInboxComponent} from '../messenger/messenger-inbox/messenger-inbox.component';
import {MessengerSentComponent} from '../messenger/messenger-sent/messenger-sent.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent, MessengerComponent, MessengerInboxComponent, MessengerSentComponent],
      imports: [MatIconModule, MatToolbarModule, MatCardModule]
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
