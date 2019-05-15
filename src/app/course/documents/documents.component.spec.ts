import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocumentsComponent} from './documents.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatTableModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../../user.service';
import {MockUserService, MockDataService} from '../../mocks/mocks';
import {DataService} from '../../data.service';
import {UploadService} from '../../upload/upload.service';

describe('DocumentsComponent', () => {
  let component: DocumentsComponent;
  let fixture: ComponentFixture<DocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsComponent],
      imports: [HttpClientTestingModule, MatCardModule, MatMenuModule, MatFormFieldModule,
        MatIconModule, MatTableModule, MatCheckboxModule],
      providers: [{provide: UserService, useClass: MockUserService},
     {provide: DataService, useClass: MockDataService},
      {provide: UploadService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
