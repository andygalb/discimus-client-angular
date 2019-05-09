import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminUserComponent} from './admin-user.component';
import {
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';

describe('AdminUserComponent', () => {
  let component: AdminUserComponent;
  let fixture: ComponentFixture<AdminUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserComponent],
      imports: [MatTableModule, MatCheckboxModule, HttpClientTestingModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatOptionModule, MatSelectModule, RouterModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
