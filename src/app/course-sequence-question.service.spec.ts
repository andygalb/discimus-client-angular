import {TestBed} from '@angular/core/testing';

import {CourseSequenceQuestionService} from './course-sequence-question.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import {async} from '@angular/core/testing';

describe('CourseSequenceQuestionService', () => {
  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [{provide: Router},
      {provide: HttpClientTestingModule}]
  })));

  it('should be created', async(() => {
    const service: CourseSequenceQuestionService = TestBed.get(CourseSequenceQuestionService);
    expect(service).toBeTruthy();
  }));
});
