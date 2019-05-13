import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseDialogComponent} from './course-dialog.component';
import {MAT_DIALOG_DATA, MatCardModule, MatDialogRef, MatFormFieldModule, MatMenuModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RCourse} from '../../models/modelClasses';

describe('SequenceDialogComponent', () => {
  let component: CourseDialogComponent;
  let fixture: ComponentFixture<CourseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDialogComponent],
      imports: [MatCardModule, MatMenuModule, MatFormFieldModule, FormsModule],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {course: new RCourse(), dialogMetaData: null} }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
