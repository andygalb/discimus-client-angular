import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageDialogComponent} from './message-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatCardModule, MatDialogModule, MatDialogRef, MatFormFieldModule, MatInputModule, MatMenuModule, MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {RMessage} from '../../models/modelClasses';
import {MessengerService} from '../../messenger.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockMessengerService} from '../../mocks/mocks';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MessageDialogComponent', () => {
  let component: MessageDialogComponent;
  let fixture: ComponentFixture<MessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDialogComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatCardModule, MatDialogModule,
        MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, FormsModule, AngularEditorModule],
      providers: [
        MessageDialogComponent,
        {provide: MessengerService, useClass: MockMessengerService},
        { provide: MatDialogRef},
        {
          provide: MAT_DIALOG_DATA, useValue: {
          message: new RMessage(),
          dialogMetaData: {titleText: ' Message', okButtonText: 'Send'}
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
