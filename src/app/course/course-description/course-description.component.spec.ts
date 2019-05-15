import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseDescriptionComponent} from './course-description.component';
import {MatCardModule, MatDialogModule, MatIconModule, MatMenuModule} from '@angular/material';
import {UserService} from '../../user.service';
import {MockCourseSequenceQuestionService, MockDataService, MockUserService} from '../../mocks/mocks';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {DataService} from '../../data.service';

describe('CourseDescriptionComponent', () => {
  let component: CourseDescriptionComponent;
  let fixture: ComponentFixture<CourseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDescriptionComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatCardModule,
        MatMenuModule, MatIconModule, MatDialogModule],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: DataService, useClass: MockDataService}
       ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
