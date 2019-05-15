import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseDialogComponent} from './course-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RCourse} from '../../models/modelClasses';
import {MockFactory} from '../../mocks/mockFactory';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CourseDialogComponent', () => {
  let component: CourseDialogComponent;
  let fixture: ComponentFixture<CourseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDialogComponent],
      imports: [BrowserAnimationsModule, MatCardModule, MatDialogModule,
        MatMenuModule, MatInputModule, MatFormFieldModule, FormsModule],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {course: MockFactory.getMockCourse(),
            dialogMetaData: {titleText: ' Course', okButtonText: 'Save'}} }],
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
