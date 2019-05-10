import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {MatCardModule, MatFormFieldModule, MatMenuModule} from '@angular/material';
import {ActivatedRoute, Route, RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../user.service';
import {MockUserService} from '../mocks/mocks';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [HttpClientTestingModule, MatCardModule, MatMenuModule, MatFormFieldModule, RouterModule.forRoot([])],
      providers: [{provide: UserService, useClass: MockUserService}, ActivatedRoute]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
