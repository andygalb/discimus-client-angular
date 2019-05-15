import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {UserService} from './user.service';
import {MockUserService} from './mocks/mocks';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule],
    providers: [
      {provide: UserService, useClass: MockUserService}
    ]

  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
