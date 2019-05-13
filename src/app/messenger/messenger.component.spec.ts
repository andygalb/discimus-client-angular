import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerComponent} from './messenger.component';
import {
  MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MessengerInboxComponent} from './messenger-inbox/messenger-inbox.component';
import {MessengerSentComponent} from './messenger-sent/messenger-sent.component';
import {MessengerService} from '../messenger.service';
import {MockUserService} from '../mocks/mocks';
import {UserService} from '../user.service';
import {RMessage} from '../models/modelClasses';

describe('MessengerComponent', () => {
  let component: MessengerComponent;
  let fixture: ComponentFixture<MessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerComponent, MessengerInboxComponent, MessengerSentComponent],
      imports: [MatIconModule, MatToolbarModule, MatTabsModule, MatTableModule, MatDialogModule],
      providers: [{provide: MessengerService},
        {provide: UserService, useClass: MockUserService},
        MatDialogRef,
        { provide: MAT_DIALOG_DATA, useValue: {
          message: new RMessage(),
          dialogMetaData: {titleText: ' Create Message', okButtonText: 'Send'}
        } }]
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
