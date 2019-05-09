import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {
  MatBadgeModule,
  MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from './user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CourseSequenceQuestionService} from './course-sequence-question.service';
import {LoaderService} from './interceptor/httpconfig.interceptor.';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MockCourseSequenceQuestionService, MockLoaderService, MockUserService} from './mocks/mocks';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule, MatListModule, MatCardModule, MatBadgeModule, MatSidenavModule, MatMenuModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatToolbarModule],
      providers :[{provide: UserService, useClass: MockUserService},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: LoaderService, useClass: MockLoaderService}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Discimus'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Discimus');
  }));
});
