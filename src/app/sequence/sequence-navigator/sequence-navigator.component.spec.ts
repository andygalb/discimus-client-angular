import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceNavigatorComponent} from './sequence-navigator.component';
import {MatCardModule, MatFormFieldModule, MatListModule, MatMenuModule} from '@angular/material';

describe('SequenceNavigatorComponent', () => {
  let component: SequenceNavigatorComponent;
  let fixture: ComponentFixture<SequenceNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceNavigatorComponent],
      imports: [MatCardModule, MatMenuModule, MatFormFieldModule, MatListModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
