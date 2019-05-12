import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerComponent} from './messenger.component';
import {MatDialogModule, MatIconModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {MessengerInboxComponent} from './messenger-inbox/messenger-inbox.component';
import {MessengerSentComponent} from './messenger-sent/messenger-sent.component';
import {MessengerService} from '../messenger.service';
import {MockUserService} from '../mocks/mocks';
import {UserService} from '../user.service';

describe('MessengerComponent', () => {
  let component: MessengerComponent;
  let fixture: ComponentFixture<MessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerComponent, MessengerInboxComponent, MessengerSentComponent],
      imports: [MatIconModule, MatToolbarModule, MatTabsModule, MatTableModule, MatDialogModule],
      providers: [{provide: MessengerService},
        {provide: UserService, useClass: MockUserService}]
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
