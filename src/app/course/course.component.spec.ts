import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {MatCardModule, MatFormFieldModule, MatMenuModule} from '@angular/material';
import {ActivatedRoute, convertToParamMap, Route, RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../user.service';
import {MockUserService} from '../mocks/mocks';
import {Observable} from 'rxjs';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [HttpClientTestingModule, MatCardModule, MatMenuModule, MatFormFieldModule, RouterModule.forRoot([])],
      providers: [CourseComponent,
        {provide: UserService, useClass: MockUserService},
        {provide: ActivatedRoute , useValue: {
          snapshot: {paramMap: convertToParamMap({'id': '123'}) }
        }}]
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
