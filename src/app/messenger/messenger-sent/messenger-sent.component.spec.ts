import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerSentComponent} from './messenger-sent.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatCardModule, MatIconModule, MatTableModule} from '@angular/material';
import {UserService} from '../../user.service';
import {MockUserService} from '../../mocks/mocks';
import {HttpClientModule} from '@angular/common/http';

describe('MessengerSentComponent', () => {
  let component: MessengerSentComponent;
  let fixture: ComponentFixture<MessengerSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerSentComponent],
      imports: [HttpClientModule, MatCardModule, MatTableModule, MatIconModule],
      providers: [{provide: UserService, useClass: MockUserService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
