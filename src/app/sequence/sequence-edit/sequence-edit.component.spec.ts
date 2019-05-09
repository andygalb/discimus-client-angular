import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceEditComponent} from './sequence-edit.component';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatMenuModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('SequenceEditComponent', () => {
  let component: SequenceEditComponent;
  let fixture: ComponentFixture<SequenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceEditComponent],
      imports: [MatCardModule, MatMenuModule, RouterModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
