import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceDialogComponent} from './sequence-dialog.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {AngularEditorModule} from '@kolkov/angular-editor';

describe('SequenceDialogComponent', () => {
  let component: SequenceDialogComponent;
  let fixture: ComponentFixture<SequenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceDialogComponent],
      imports: [MatCardModule, MatMenuModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule, MatIconModule, AngularEditorModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
