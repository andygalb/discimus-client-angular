import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseSequenceComponent} from './course-sequence.component';
import {MatButtonModule, MatCardModule, MatDialog, MatDialogModule, MatDialogRef, MatIconModule, MatMenuModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../../user.service';
import {MockUserService} from '../../mocks/mocks';

describe('CourseSequenceComponent', () => {
  let component: CourseSequenceComponent;
  let fixture: ComponentFixture<CourseSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSequenceComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatCardModule, MatMenuModule, MatIconModule, RouterTestingModule, MatButtonModule, MatDialogModule],
      providers: [{provide: UserService, useClass: MockUserService}]
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
