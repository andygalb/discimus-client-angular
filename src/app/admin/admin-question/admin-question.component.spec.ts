import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminQuestionComponent} from './admin-question.component';
import {MatCardModule, MatFormFieldModule, MatMenuModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdminQuestionComponent', () => {
  let component: AdminQuestionComponent;
  let fixture: ComponentFixture<AdminQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminQuestionComponent],
      imports: [HttpClientTestingModule,MatCardModule, MatMenuModule, MatFormFieldModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
