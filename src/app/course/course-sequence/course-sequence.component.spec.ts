import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseSequenceComponent} from './course-sequence.component';
import {MatButtonModule, MatCardModule, MatDialog, MatDialogModule, MatDialogRef, MatIconModule, MatMenuModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('CourseSequenceComponent', () => {
  let component: CourseSequenceComponent;
  let fixture: ComponentFixture<CourseSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSequenceComponent, MatDialogRef],
      imports: [MatCardModule, MatMenuModule, MatIconModule, RouterTestingModule, MatButtonModule, MatDialogModule, MatDialogRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
