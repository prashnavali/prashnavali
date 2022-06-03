import { Component, OnInit, Input } from '@angular/core';
import { Paper } from 'src/app/model/paper';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'src/app/service/toastr.service';

@Component({
  selector: 'pv-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
  @Input() paper!: Paper;

  faUpVote = faArrowUp
  faDownVote = faArrowDown

  constructor(
    private api: ApiService,
    private toast: ToastrService
    ) {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  savePaper(): void {
    this.api.httpPost('/papers', this.paper).subscribe(
      (res: any) => {
        this.toast.open('success', 'Updated Successfully', res.name);
      }
    );
  }

  upVote(): void {
    this.paper.vote += 1;
    this.savePaper();
  }

  downVote(): void {
    this.paper.vote -= 1;
    this.savePaper();
  }


  ngOnInit(): void {
  }

}
