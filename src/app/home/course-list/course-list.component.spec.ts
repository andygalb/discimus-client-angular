import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseListComponent} from './course-list.component';
import {MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatMenuModule} from '@angular/material';
import {TruncatePipe} from '../../truncate.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent,  TruncatePipe],
      imports: [MatCardModule, MatMenuModule, MatFormFieldModule, MatIconModule, MatExpansionModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
