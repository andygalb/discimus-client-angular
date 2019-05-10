import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {MatCardModule, MatFormFieldModule, MatMenuModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MatFormFieldModule, MatCardModule, MatMenuModule, MatFormFieldModule, FormsModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
