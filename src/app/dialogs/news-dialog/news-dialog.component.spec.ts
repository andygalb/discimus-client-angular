import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsDialogComponent} from './news-dialog.component';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatCardModule, MatDialogRef, MatFormFieldModule, MatIconModule} from '@angular/material';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {UserService} from '../../user.service';
import {MockUserService} from '../../mocks/mocks';
import {RNews} from '../../models/modelClasses';

describe('SequenceDialogComponent', () => {
  let component: NewsDialogComponent;
  let fixture: ComponentFixture<NewsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDialogComponent],
      imports: [AngularEditorModule, FormsModule, MatFormFieldModule, MatCardModule, MatIconModule],
      providers: [{provide: UserService, useValue: MockUserService},
        NewsDialogComponent,
        MatDialogRef,
        { provide: MAT_DIALOG_DATA, useValue: {news: new RNews(), dialogMetaData: null } }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
