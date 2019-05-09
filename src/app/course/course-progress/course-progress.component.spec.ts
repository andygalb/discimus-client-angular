import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseProgressComponent} from './course-progress.component';
import {MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';

describe('CourseProgressComponent', () => {
  let component: CourseProgressComponent;
  let fixture: ComponentFixture<CourseProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseProgressComponent],
      imports: [MatCardModule, MatMenuModule, MatIconModule]
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
