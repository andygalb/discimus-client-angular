import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceDialogComponent} from './sequence-dialog.component';
import {
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AngularEditorModule} from '@kolkov/angular-editor';

describe('SequenceDialogComponent', () => {
  let component: SequenceDialogComponent;
  let fixture: ComponentFixture<SequenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceDialogComponent],
      imports: [MatCardModule,  MatMenuModule, ReactiveFormsModule, MatDialogModule, MatIconModule,  MatInputModule, MatFormFieldModule, MatOptionModule, FormsModule, MatSelectModule, MatIconModule, AngularEditorModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
