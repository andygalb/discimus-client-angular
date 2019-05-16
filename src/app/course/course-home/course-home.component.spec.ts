import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseHomeComponent} from './course-home.component';
import {
  MAT_DIALOG_DATA, MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatDialogRef,
  MatIconModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import {CourseDescriptionComponent} from '../course-description/course-description.component';
import {NewsComponent} from '../../news/news.component';
import {DocumentsComponent} from '../documents/documents.component';
import {CourseProgressComponent} from '../course-progress/course-progress.component';
import {CourseSequenceComponent} from '../course-sequence/course-sequence.component';
import {CourseStudentsComponent} from '../course-students/course-students.component';
import {MockCourseSequenceQuestionService, MockDataService, MockUserService} from '../../mocks/mocks';
import {UserService} from '../../user.service';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {DataService} from '../../data.service';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {News} from '../../models/modelClasses';
import {RouterTestingModule} from '@angular/router/testing';

describe('CourseHomeComponent', () => {
  let component: CourseHomeComponent;
  let fixture: ComponentFixture<CourseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseHomeComponent, CourseDescriptionComponent, NewsComponent, DocumentsComponent, CourseProgressComponent,
        CourseSequenceComponent, CourseStudentsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatProgressSpinnerModule, MatButtonModule,
        MatCardModule, MatDialogModule, MatMenuModule, MatIconModule, MatTableModule, MatCheckboxModule],
      providers: [{provide: UserService, useClass: MockUserService},
        {provide: DataService, useClass: MockDataService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: ActivatedRoute, useValue: {parent: {
              snapshot: {paramMap: convertToParamMap({'id': '123'}) }}}},
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {news: new News(), dialogMetaData: { titleText: 'Test Title Text'} } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
