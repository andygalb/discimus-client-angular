import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {MockUserService} from '../mocks/mocks';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MatFormFieldModule, MatCardModule, MatInputModule, MatMenuModule, MatFormFieldModule, FormsModule],
      providers: [{provide: Router},
        {provide: UserService, useClass: MockUserService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
