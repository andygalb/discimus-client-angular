import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SiteNewsComponent} from './site-news.component';
import {MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatMenuModule} from '@angular/material';

describe('SiteNewsComponent', () => {
  let component: SiteNewsComponent;
  let fixture: ComponentFixture<SiteNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteNewsComponent],
      imports: [MatCardModule, MatMenuModule, MatFormFieldModule, MatIconModule, MatExpansionModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
