import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceNavigatorComponent} from './sequence-navigator.component';
import {MatCardModule, MatFormFieldModule, MatListModule, MatMenuModule} from '@angular/material';
import {UserService} from '../../user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockUserService} from '../../mocks/mocks';

describe('SequenceNavigatorComponent', () => {
  let component: SequenceNavigatorComponent;
  let fixture: ComponentFixture<SequenceNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceNavigatorComponent],
      imports: [MatCardModule, MatMenuModule, MatFormFieldModule, MatListModule, HttpClientTestingModule],
      providers: [{provide: UserService , useClass: MockUserService}]
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
