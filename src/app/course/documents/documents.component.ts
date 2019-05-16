import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import {ICourseDocument} from '../../models/modelInterfaces';
import {MatTableDataSource} from '@angular/material';
import {UploadService} from '../../upload/upload.service';
import {UserService} from '../../user.service';
import {forkJoin} from 'rxjs';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  @Input() id: String;

  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  @ViewChild('file') file;
  public files: Set<File> = new Set();


  dataSource = new MatTableDataSource();
  displayedColumns = ['selectDocument', 'originalFilename', 'creationDate'];

  documents: Observable<ICourseDocument[]>;

  constructor(private dataService: DataService,
              public uploadService: UploadService, public userService: UserService) {
  }

  ngOnInit() {
    this.getDocuments(this.id);
  }

  getDocuments(id: String) {
    this.documents = this.dataService.getAllDocumentsForCourse(id);
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (const key in files) {
      if (!isNaN(parseInt(key, 10))) {
        this.files.add(files[key]);
      }
    }
    console.log(files);
  }

  onUploadButtonPressed() {
    // this.uploadService.upload(this.files, this.userService.user._id,  this.id);

    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files, this.userService.user._id, this.id);

    // convert the progress map into an array
    const allProgressObservables = [];
    for (const key of this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    // this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      // this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
      // Reload table!
      this.getDocuments(this.id);
    });

  }


  addFiles() {
    this.file.nativeElement.click();
  }

}
