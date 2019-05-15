
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceDialogComponent} from './sequence-dialog.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';

import {
  MAT_DIALOG_DATA,
  MatDialogModule, MatDialogRef
} from '@angular/material/dialog';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {RSequence} from '../../models/modelClasses';
import {MockUserService} from '../../mocks/mocks';
import {UserService} from '../../user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MockFactory} from '../../mocks/mockFactory';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SequenceDialogComponent', () => {
  let component: SequenceDialogComponent;
  let fixture: ComponentFixture<SequenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceDialogComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatCardModule,
        ReactiveFormsModule, MatDialogModule, MatInputModule, MatFormFieldModule,
        FormsModule, MatIconModule, AngularEditorModule],
      providers: [{provide: UserService, useValue: MockUserService},
        SequenceDialogComponent,
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: [{sequence: MockFactory.getMockSequence(), dialogMetaData: null}] }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


