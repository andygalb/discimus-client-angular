import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerInboxComponent} from './messenger-inbox.component';
import {
  MAT_DIALOG_DATA, MatCardModule, MatDialog, MatDialogModule, MatDialogRef, MatFormFieldModule, MatIconModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RMessage} from '../../models/modelClasses';
import {UserService} from '../../user.service';
import {MockUserService} from '../../mocks/mocks';
import {MessengerService} from '../../messenger.service';

describe('MessengerInboxComponent', () => {
  let component: MessengerInboxComponent;
  let fixture: ComponentFixture<MessengerInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerInboxComponent],
      imports: [MatIconModule, MatCardModule, MatDialogModule, MatFormFieldModule, FormsModule, MatTableModule, ReactiveFormsModule]
      ,
      providers: [MatDialogRef,
        {
          provide: MAT_DIALOG_DATA, useValue: {
          message: new RMessage(),
          dialogMetaData: {titleText: ' Message', okButtonText: 'Send'}
        }
        },
        {provide: UserService, useClass: MockUserService},
      MessengerService]
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
