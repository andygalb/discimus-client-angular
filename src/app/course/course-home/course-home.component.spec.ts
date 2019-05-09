import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseHomeComponent} from './course-home.component';
import {MatCardModule, MatMenuModule} from '@angular/material';
import {CourseDescriptionComponent} from '../course-description/course-description.component';
import {NewsComponent} from '../../news/news.component';
import {DocumentsComponent} from '../documents/documents.component';

describe('CourseHomeComponent', () => {
  let component: CourseHomeComponent;
  let fixture: ComponentFixture<CourseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseHomeComponent, CourseDescriptionComponent, NewsComponent, DocumentsComponent],
      imports: [MatCardModule, MatMenuModule]
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
