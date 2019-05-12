import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessengerInboxComponent} from './messenger-inbox.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('MessengerInboxComponent', () => {
  let component: MessengerInboxComponent;
  let fixture: ComponentFixture<MessengerInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerInboxComponent],
      imports: [MatIconModule, MatCardModule, MatFormFieldModule, FormsModule, MatTableModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
