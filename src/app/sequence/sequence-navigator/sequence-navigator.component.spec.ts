import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceNavigatorComponent} from './sequence-navigator.component';

describe('SequenceNavigatorComponent', () => {
  let component: SequenceNavigatorComponent;
  let fixture: ComponentFixture<SequenceNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceNavigatorComponent]
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
