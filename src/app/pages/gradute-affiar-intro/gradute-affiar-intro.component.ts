import { GraduationStudyDepartmentService } from './../../services/graduation-study-department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradute-affiar-intro',
  templateUrl: './gradute-affiar-intro.component.html',
  styleUrls: ['./gradute-affiar-intro.component.css']
})
export class GraduteAffiarIntroComponent implements OnInit {
  banner : any = {


		bg_image: "assets/images/about/gradute.jpg",

	}

  layout : any = {
		sidebar: false,
		sidebarPosition:"",
		container_class:"min-container"
	}

  intro : any ;
  baseUrl = 'http://luxor.edu.eg:8098/';
  constructor(private service : GraduationStudyDepartmentService) { }

  ngOnInit(): void {
    this.service.getIntro().subscribe(
      data=>this.intro = data,
      err=> console.log(err)
    )
  }

}
