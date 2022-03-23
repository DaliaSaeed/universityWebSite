import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dark1',
  templateUrl: './header-dark1.component.html',
  styleUrls: ['./header-dark1.component.css']
})
export class HeaderDark1Component implements OnInit {
  date : any;
  constructor(public datepipe: DatePipe) { 
    this.date=new Date();
    let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');

  }

  ngOnInit(): void {
  }

}
