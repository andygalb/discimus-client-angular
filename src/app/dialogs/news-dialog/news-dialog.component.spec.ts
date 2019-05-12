import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsDialogComponent} from './news-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatFormFieldModule, MatIconModule} from '@angular/material';

describe('SequenceDialogComponent', () => {
  let component: NewsDialogComponent;
  let fixture: ComponentFixture<NewsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDialogComponent],
      imports: [FormsModule, MatFormFieldModule, MatCardModule, MatIconModule]

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
