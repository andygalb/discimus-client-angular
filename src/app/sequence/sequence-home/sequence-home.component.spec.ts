import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceHomeComponent } from './sequence-home.component';

describe('SequenceHomeComponent', () => {
  let component: SequenceHomeComponent;
  let fixture: ComponentFixture<SequenceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceHomeComponent ]
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
