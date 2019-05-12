import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SettingsComponent} from './settings.component';
import {
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatIconModule, MatRadioModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [MatIconModule, MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatButtonToggleModule, MatSlideToggleModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
