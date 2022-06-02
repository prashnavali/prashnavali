import { Component, OnInit, Input } from '@angular/core';
import { Paper } from 'src/app/model/paper';

@Component({
  selector: 'pv-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
  @Input() paper!: Paper;

  constructor() {
  }

  ngOnInit(): void {
  }

}
