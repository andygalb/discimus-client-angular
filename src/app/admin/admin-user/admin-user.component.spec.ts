import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminUserComponent} from './admin-user.component';
import {
  MatCardModule, MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataService} from '../../data.service';
import {MockDataService} from '../../mocks/mocks';

describe('AdminUserComponent', () => {
  let component: AdminUserComponent;
  let fixture: ComponentFixture<AdminUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserComponent],
      imports: [BrowserAnimationsModule, MatTableModule, MatCheckboxModule, HttpClientTestingModule,
        MatCardModule, MatMenuModule, MatFormFieldModule, MatOptionModule, MatSelectModule, RouterModule],
      providers: [{provide: DataService, useClass: MockDataService}]

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
