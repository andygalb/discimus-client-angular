import {LoaderService} from '../interceptor/httpconfig.interceptor.';
import {CourseSequenceQuestionService} from '../course-sequence-question.service';
import {UserService} from '../user.service';

export class MockUserService extends UserService {

}

export class MockCourseSequenceQuestionService extends CourseSequenceQuestionService {

}

export class MockLoaderService extends LoaderService {

}
