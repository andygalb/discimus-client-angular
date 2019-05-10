import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SettingsComponent} from './settings.component';
import {MatCardModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule]
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
