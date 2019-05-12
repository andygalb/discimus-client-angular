import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageDialogComponent} from './message-dialog.component';
import {
  MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';

describe('SequenceDialogComponent', () => {
  let component: MessageDialogComponent;
  let fixture: ComponentFixture<MessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDialogComponent],
      imports: [MatCardModule, MatDialogModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, FormsModule, AngularEditorModule],
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
