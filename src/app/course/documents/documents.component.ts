import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {CourseDocument} from '../../models/modelInterfaces';
import {MatTableDataSource} from '@angular/material';
import { MatDialog } from '@angular/material';
import {UploadService} from '../../upload/upload.service';
import { DialogComponent } from '../../upload/dialog/dialog.component';
import {UserService} from '../../user.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  @ViewChild('file') file;
  public files: Set<File> = new Set();

  //TODO must have a general file with details of server etc....

  dataSource = new MatTableDataSource();
  displayedColumns = ['selectDocument', 'originalFilename', 'creationDate'];

  documents: CourseDocument[];
  id: String;

  constructor(private dataService: DataService, private route: ActivatedRoute, public uploadService: UploadService, public userService: UserService) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getDocuments(this.id);
  }

  getDocuments(id: String) {
    this.dataService.getAllDocumentsForCourse(id)
      .subscribe((data) => {
        console.log(data);
        this.documents = data;
        this.dataSource.data = data;
      });
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
    console.log(files);
  }

  onUploadButtonPressed(){
   // this.uploadService.upload(this.files, this.userService.user._id,  this.id);

    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files, this.userService.user._id,  this.id);

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
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
      //this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
      //Reload table!
      this.getDocuments(this.id);
    });

  }


  addFiles() {
    this.file.nativeElement.click();
  }

}
