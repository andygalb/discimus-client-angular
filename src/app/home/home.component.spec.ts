import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MessengerInboxComponent} from '../messenger/messenger-inbox/messenger-inbox.component';
import {CourseListComponent} from './course-list/course-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SiteNewsComponent} from './site-news/site-news.component';
import {MatCardModule} from '@angular/material';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CourseListComponent, MessengerInboxComponent, SiteNewsComponent],
      imports: [RouterTestingModule, MatCardModule]
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
