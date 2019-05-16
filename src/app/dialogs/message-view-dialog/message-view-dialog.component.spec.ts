import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageViewDialogComponent} from './message-view-dialog.component';
import {MAT_DIALOG_DATA, MatCardModule, MatDialogModule, MatDialogRef, MatIconModule} from '@angular/material';
import {Message, News} from '../../models/modelClasses';
import {MockFactory} from '../../mocks/mockFactory';

describe('MessageViewDialogComponent', () => {
  let component: MessageViewDialogComponent;
  let fixture: ComponentFixture<MessageViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageViewDialogComponent],
      imports: [MatCardModule, MatDialogModule, MatIconModule],
      providers: [
    { provide: MatDialogRef, useValue: {}},
    { provide: MAT_DIALOG_DATA, useValue: {message: MockFactory.getMockMessage(), dialogMetaData: { titleText: 'Test Title Text'} } }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
