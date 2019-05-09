import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseDescriptionComponent} from './course-description.component';
import {MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';

describe('CourseDescriptionComponent', () => {
  let component: CourseDescriptionComponent;
  let fixture: ComponentFixture<CourseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDescriptionComponent],
      imports: [MatCardModule, MatMenuModule, MatIconModule]
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
