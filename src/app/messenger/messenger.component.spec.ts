import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerComponent} from './messenger.component';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MessengerInboxComponent} from './messenger-inbox/messenger-inbox.component';
import {MessengerSentComponent} from './messenger-sent/messenger-sent.component';
import {MessengerService} from '../messenger.service';
import {MockMessengerService, MockUserService} from '../mocks/mocks';
import {UserService} from '../user.service';
import {Message} from '../models/modelClasses';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MessengerComponent', () => {
  let component: MessengerComponent;
  let fixture: ComponentFixture<MessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerComponent, MessengerInboxComponent, MessengerSentComponent],
      imports: [BrowserAnimationsModule, MatSortModule, MatInputModule, MatCardModule, MatIconModule,
        MatButtonModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatTableModule, MatDialogModule],
      providers: [{provide: MessengerService, useClass: MockMessengerService},
        {provide: UserService, useClass: MockUserService},
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {
          message: new Message(),
          dialogMetaData: {titleText: ' Create IMessage', okButtonText: 'Send'}
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
