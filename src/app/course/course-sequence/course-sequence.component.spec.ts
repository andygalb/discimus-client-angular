import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseSequenceComponent} from './course-sequence.component';
import {MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';

describe('CourseSequenceComponent', () => {
  let component: CourseSequenceComponent;
  let fixture: ComponentFixture<CourseSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSequenceComponent],
      imports: [MatCardModule, MatMenuModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
