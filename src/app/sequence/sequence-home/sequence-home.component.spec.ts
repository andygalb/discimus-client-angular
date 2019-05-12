import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceHomeComponent} from './sequence-home.component';
import {MatCardModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {AceEditorModule} from 'ng2-ace-editor';
import {SequenceNavigatorComponent} from '../sequence-navigator/sequence-navigator.component';

describe('SequenceHomeComponent', () => {
  let component: SequenceHomeComponent;
  let fixture: ComponentFixture<SequenceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceHomeComponent, SequenceNavigatorComponent],
      imports: [AceEditorModule, RouterTestingModule, MatCardModule, MatIconModule, MatFormFieldModule, FormsModule],

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
