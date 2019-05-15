import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminCourseComponent} from './admin-course.component';
import {MatCardModule, MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DataService} from '../../data.service';
import {MockDataService} from '../../mocks/mocks';
import {RouterTestingModule} from '@angular/router/testing';

describe('AdminCourseComponent', () => {
  let component: AdminCourseComponent;
  let fixture: ComponentFixture<AdminCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCourseComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatCardModule,
        MatMenuModule, MatFormFieldModule, MatTableModule, MatCheckboxModule],
      providers: [{provide: DataService, useClass: MockDataService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
