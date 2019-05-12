import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionDialogComponent} from './question-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {AngularEditorModule} from '@kolkov/angular-editor';

describe('SequenceDialogComponent', () => {
  let component: QuestionDialogComponent;
  let fixture: ComponentFixture<QuestionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDialogComponent],
      imports: [FormsModule, MatFormFieldModule, MatDialogModule, MatOptionModule, ReactiveFormsModule, MatSelectModule, AngularEditorModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
