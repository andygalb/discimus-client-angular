import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceHomeComponent} from './sequence-home.component';
import {MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('SequenceHomeComponent', () => {
  let component: SequenceHomeComponent;
  let fixture: ComponentFixture<SequenceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceHomeComponent],
      imports: [RouterTestingModule, MatCardModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
