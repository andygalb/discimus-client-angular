import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceEditComponent} from './sequence-edit.component';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TruncatePipe} from '../../truncate.pipe';

describe('SequenceEditComponent', () => {
  let component: SequenceEditComponent;
  let fixture: ComponentFixture<SequenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceEditComponent, TruncatePipe],
      imports: [MatCardModule, MatMenuModule, MatTableModule, MatIconModule, RouterModule, FormsModule, MatFormFieldModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
