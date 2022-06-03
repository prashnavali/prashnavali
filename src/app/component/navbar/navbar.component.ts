import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'pv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  uploadDialog(): void {
    const dialogRef = this.dialog.open(UploadComponent, {
      width: '300px'
    });
  }
  ngOnInit(): void {
      
  }

}
