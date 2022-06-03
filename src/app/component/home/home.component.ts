import { Component, OnInit } from '@angular/core';
import { Paper } from 'src/app/model/paper';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'pv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  getData(){
    this.api.httpGet('/papers').subscribe((res:any)=>{
      this.papers = res;
    });
  }

  papers : Paper[] = []

  ngOnInit(): void {
    this.getData();
  }

}
