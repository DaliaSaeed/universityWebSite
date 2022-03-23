import { GraduationStudyDepartmentService } from './../../services/graduation-study-department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradute-study-manager-word',
  templateUrl: './gradute-study-manager-word.component.html',
  styleUrls: ['./gradute-study-manager-word.component.css']
})
export class GraduteStudyManagerWordComponent implements OnInit {
	banner : any = {

    bg_image: "assets/images/about/gradute.jpg",

	}


	layout : any = {
		sidebar: false,
		sidebarPosition:"",
		container_class:"min-container"
	}

 public manager : any;
  constructor(private service : GraduationStudyDepartmentService) { }

  ngOnInit(): void {
    this.service.getManager().subscribe(
      data=> this.manager = data ,
      err=> console.log(err)
    )

  }

}
