import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceComponent} from './sequence.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {MockCourseSequenceQuestionService, MockUserService} from '../mocks/mocks';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';

describe('SequenceComponent', () => {
  let component: SequenceComponent;
  let fixture: ComponentFixture<SequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule, MatFormFieldModule],
      providers : [
        {provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
