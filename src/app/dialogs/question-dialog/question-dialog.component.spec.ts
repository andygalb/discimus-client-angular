import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionDialogComponent} from './question-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {News, Question} from '../../models/modelClasses';
import {MockFactory} from '../../mocks/mockFactory';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('QuestionDialogComponent', () => {
  let component: QuestionDialogComponent;
  let fixture: ComponentFixture<QuestionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDialogComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, FormsModule, MatInputModule,
        MatFormFieldModule, MatDialogModule, MatOptionModule, ReactiveFormsModule, MatSelectModule, AngularEditorModule],
      providers: [
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA,
          useValue: {question: MockFactory.getMockQuestion(), dialogMetaData:  { titleText: 'Test Title Text'} } }]
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
