import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MessengerInboxComponent} from '../messenger/messenger-inbox/messenger-inbox.component';
import {CourseListComponent} from './course-list/course-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SiteNewsComponent} from './site-news/site-news.component';
import {
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormField,
  MatFormFieldModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';
import {MockCourseSequenceQuestionService, MockUserService} from '../mocks/mocks';
import {UserService} from '../user.service';
import {TruncatePipe} from '../truncate.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CourseListComponent, MessengerInboxComponent, SiteNewsComponent, TruncatePipe],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatDialogModule, RouterTestingModule,
        MatCardModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatTableModule],
      providers: [{provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
