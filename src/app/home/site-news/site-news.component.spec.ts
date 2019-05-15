import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SiteNewsComponent} from './site-news.component';
import {MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatMenuModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockDataService} from '../../mocks/mocks';
import {DataService} from '../../data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SiteNewsComponent', () => {
  let component: SiteNewsComponent;
  let fixture: ComponentFixture<SiteNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteNewsComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule, MatCardModule, MatMenuModule,
        MatFormFieldModule, MatIconModule, MatExpansionModule],
      providers: [{provide: DataService, useClass: MockDataService}]
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
