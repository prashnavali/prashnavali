import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'src/app/service/toastr.service';
import { Paper } from 'src/app/model/paper';
import { ApiService } from 'src/app/service/api.service';
import { HttpErrorResponse } from '@angular/common/http';


export interface DialogData {
  url: string
}


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar: MatSnackBar,
    private toast: ToastrService,
    public api: ApiService
  ) { }
  url!: string;
  name!: string;
  description!: string;



  onNoClick(): void {
    this.dialogRef.close();
  }



  onOkClick(name: string, url: string, description: string) {
    var paper: Paper = {
      id: undefined,
      url,
      name,
      description,
      date: new Date,
      vote: 0
    }

    this.api.httpPost('/papers', paper).subscribe(
      (success) => {
        this.toast.open('success', 'Paper added', 'File added')
      }
    );


    console.log("Paper object is " + paper);



    this.toast.open("Normal", "File Added", url);
    this.dialogRef.close();
    console.log(url);
    console.log(name);
    console.log(description);



  }
  ngOnInit(): void {
  }

}
