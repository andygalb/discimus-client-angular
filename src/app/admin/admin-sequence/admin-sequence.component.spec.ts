import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSequenceComponent } from './admin-sequence.component';

describe('AdminSequenceComponent', () => {
  let component: AdminSequenceComponent;
  let fixture: ComponentFixture<AdminSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
