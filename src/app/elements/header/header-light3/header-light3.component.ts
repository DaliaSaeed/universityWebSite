import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-light3',
  templateUrl: './header-light3.component.html',
  styleUrls: ['./header-light3.component.css']
})
export class HeaderLight3Component implements OnInit {
  date : any;
  constructor(public datepipe: DatePipe) {
    this.date=new Date();
    let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');

  }

  ngOnInit(): void {
  }

}
