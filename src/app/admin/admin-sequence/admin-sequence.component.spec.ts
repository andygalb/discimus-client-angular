import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSequenceComponent} from './admin-sequence.component';
import {
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';

describe('AdminSequenceComponent', () => {
  let component: AdminSequenceComponent;
  let fixture: ComponentFixture<AdminSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSequenceComponent],
      imports: [MatTableModule, MatCheckboxModule, HttpClientTestingModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatOptionModule, MatSelectModule, RouterModule]
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
