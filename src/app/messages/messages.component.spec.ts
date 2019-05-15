import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessagesComponent} from './messages.component';
import {MessengerComponent} from '../messenger/messenger.component';
import {
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MessengerInboxComponent} from '../messenger/messenger-inbox/messenger-inbox.component';
import {MessengerSentComponent} from '../messenger/messenger-sent/messenger-sent.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockUserService} from '../mocks/mocks';
import {UserService} from '../user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent, MessengerComponent, MessengerInboxComponent, MessengerSentComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatIconModule, MatInputModule,
        MatDialogModule, MatCardModule, MatSortModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatTabsModule],
      providers: [{provide: UserService, useClass: MockUserService}]
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
