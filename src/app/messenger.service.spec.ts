import {TestBed} from '@angular/core/testing';

import {MessengerService} from './messenger.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MessengerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]

  }));

  it('should be created', () => {
    const service: MessengerService = TestBed.get(MessengerService);
    expect(service).toBeTruthy();
  });
});
