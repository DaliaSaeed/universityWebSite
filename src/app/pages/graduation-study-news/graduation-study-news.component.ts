import { GraduationStudyDepartmentService } from './../../services/graduation-study-department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduation-study-news',
  templateUrl: './graduation-study-news.component.html',
  styleUrls: ['./graduation-study-news.component.css']
})
export class GraduationStudyNewsComponent implements OnInit {

  banner : any = {


		bg_image: "assets/images/banner/newsbnr.jpg",

	}


  events : any ;
  baseUrl = 'http://luxor.edu.eg:8098/';
	constructor(private service : GraduationStudyDepartmentService) { }

  ngOnInit(): void {

    this.service.getAllNews().subscribe(
      data=> this.events = data as any[] ,
      err => console.log(err)
    )
  }

}
