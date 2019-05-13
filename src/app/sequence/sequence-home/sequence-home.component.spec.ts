import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceHomeComponent} from './sequence-home.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatListModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, FormsModule} from '@angular/forms';
import {AceEditorModule} from 'ng2-ace-editor';
import {SequenceNavigatorComponent} from '../sequence-navigator/sequence-navigator.component';
import {MockCourseSequenceQuestionService, MockUserService} from '../../mocks/mocks';
import {UserService} from '../../user.service';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {ActivatedRoute} from '@angular/router';

describe('SequenceHomeComponent', () => {
  let component: SequenceHomeComponent;
  let fixture: ComponentFixture<SequenceHomeComponent>;

  const formBuilder: FormBuilder = new FormBuilder();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceHomeComponent, SequenceNavigatorComponent],
      imports: [AceEditorModule, RouterTestingModule, MatCardModule, MatListModule, MatIconModule, MatFormFieldModule, FormsModule],
    providers: [{provide: UserService, useClass: MockUserService},
      {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
      { provide: FormBuilder, useValue: formBuilder },
      {provide: ActivatedRoute, useValue: {parent: {snapshot: {params: {'id': '123'}}}}}
    ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
