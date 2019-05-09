import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {
  MatBadgeModule,
  MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [MatCardModule, MatBadgeModule, MatSidenavModule, MatMenuModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatToolbarModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Discimus'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Discimus');
  }));
});
