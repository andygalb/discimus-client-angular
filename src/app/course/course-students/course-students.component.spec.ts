import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStudentsComponentComponent } from './course-students.component';

describe('CourseStudentsComponentComponent', () => {
  let component: CourseStudentsComponentComponent;
  let fixture: ComponentFixture<CourseStudentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStudentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStudentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
