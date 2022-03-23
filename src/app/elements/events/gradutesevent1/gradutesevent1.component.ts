import { GraduationStudyDepartmentService } from './../../../services/graduation-study-department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradutesevent1',
  templateUrl: './gradutesevent1.component.html',
  styleUrls: ['./gradutesevent1.component.css']
})
export class Gradutesevent1Component implements OnInit {

  News : any  = [];
  baseUrl : string = 'http://luxor.edu.eg:8098/';
  constructor(private service : GraduationStudyDepartmentService) { }

  ngOnInit(): void {
    this.service.getAllNews().subscribe(
      data => {this.News = data} ,
      err=> console.log(err)
    );

  }

}
