import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerSentComponent} from './messenger-sent.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MessengerSentComponent', () => {
  let component: MessengerSentComponent;
  let fixture: ComponentFixture<MessengerSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerSentComponent],
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
