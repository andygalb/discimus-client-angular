import {TestBed} from '@angular/core/testing';

import {RoleGuardService} from './role-guard.service';
import {UserService} from './user.service';
import {MockUserService} from './mocks/mocks';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('RoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: UserService, useClass: MockUserService},
      {provide: Router}
    ]
  }));

  it('should be created', () => {
    const service: RoleGuardService = TestBed.get(RoleGuardService);
    expect(service).toBeTruthy();
  });
});
