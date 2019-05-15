import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsDialogComponent} from './news-dialog.component';
import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {UserService} from '../../user.service';
import {MockUserService} from '../../mocks/mocks';
import {RNews} from '../../models/modelClasses';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';

describe('NewsDialogComponent', () => {
  let component: NewsDialogComponent;
  let fixture: ComponentFixture<NewsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDialogComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, AngularEditorModule, MatInputModule,
        FormsModule, MatFormFieldModule, MatDialogModule, MatCardModule, MatIconModule],
      providers: [{provide: UserService, useValue: MockUserService},
        NewsDialogComponent,
        { provide: Router},
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {news: new RNews(), dialogMetaData: { titleText: 'Test Title Text'} } }]
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
