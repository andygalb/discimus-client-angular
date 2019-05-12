import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseStudentsComponent} from './course-students.component';
import {MatCardModule, MatIconModule, MatMenuModule, MatTableModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';

describe('CourseStudentsComponent', () => {
  let component: CourseStudentsComponent;
  let fixture: ComponentFixture<CourseStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseStudentsComponent],
      imports: [HttpClientTestingModule,MatTableModule, MatCardModule, MatMenuModule, MatIconModule],
      providers: [ActivatedRoute]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
