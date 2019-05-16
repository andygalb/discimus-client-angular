import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerInboxComponent} from './messenger-inbox.component';
import {
  MAT_DIALOG_DATA,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Message} from '../../models/modelClasses';
import {UserService} from '../../user.service';
import {MockMessengerService, MockUserService} from '../../mocks/mocks';
import {MessengerService} from '../../messenger.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MessengerInboxComponent', () => {
  let component: MessengerInboxComponent;
  let fixture: ComponentFixture<MessengerInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerInboxComponent],
      imports: [BrowserAnimationsModule, MatIconModule, MatCardModule, MatDialogModule, MatFormFieldModule,
        FormsModule, MatInputModule, MatTableModule, ReactiveFormsModule, MatSortModule],
      providers: [{ provide: MatDialogRef, useValue: {}},
        {
          provide: MAT_DIALOG_DATA, useValue: {
          message: new Message(),
          dialogMetaData: {titleText: ' IMessage', okButtonText: 'Send'}
        }
        },
        {provide: UserService, useClass: MockUserService},
        {provide: MessengerService, useClass: MockMessengerService}]
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
