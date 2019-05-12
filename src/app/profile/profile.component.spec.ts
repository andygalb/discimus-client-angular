import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {FormBuilder, FormsModule} from '@angular/forms';
import {MatCardModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {UserService} from '../user.service';
import {MockUserService} from '../mocks/mocks';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [MatIconModule, MatCardModule, FormsModule, MatFormFieldModule],
      providers: [{provide: FormBuilder},
        {provide: UserService, useClass: MockUserService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
