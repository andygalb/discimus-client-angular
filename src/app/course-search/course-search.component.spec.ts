import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseSearchComponent} from './course-search.component';
import {MatCardModule, MatFormFieldModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSearchComponent],
      imports: [MatCardModule, MatFormFieldModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
