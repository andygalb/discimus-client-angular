import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseEditComponent} from './course-edit.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../user.service';
import {MockCourseSequenceQuestionService, MockUserService} from '../../mocks/mocks';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CourseEditComponent', () => {
  let component: CourseEditComponent;
  let fixture: ComponentFixture<CourseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEditComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatFormFieldModule, MatCardModule, MatMenuModule, FormsModule, RouterModule, MatIconModule],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
