import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageViewDialogComponent} from './message-view-dialog.component';
import {MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';

describe('SequenceDialogComponent', () => {
  let component: MessageViewDialogComponent;
  let fixture: ComponentFixture<MessageViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageViewDialogComponent],
      imports: [MatCardModule, MatDialogModule, MatIconModule]
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
