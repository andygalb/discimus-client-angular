import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseProgressComponent} from './course-progress.component';
import {MatCardModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule} from '@angular/material';
import {UserService} from '../../user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CourseProgressComponent', () => {
  let component: CourseProgressComponent;
  let fixture: ComponentFixture<CourseProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseProgressComponent],
      imports: [HttpClientTestingModule, MatCardModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
