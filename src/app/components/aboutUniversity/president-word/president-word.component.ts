import { UniversityServiceService } from 'src/app/services/university-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-president-word',
  templateUrl: './president-word.component.html',
  styleUrls: ['./president-word.component.css']
})
export class PresidentWordComponent implements OnInit {
	banner : any = {
		pagetitle: "كلمة رئيس الجامعة",
		bg_image: "assets/images/banner/unibnr.jpg",
		title: "كلمة رئيس الجامعة",
	}

	layout : any = {
		sidebar: false,
		sidebarPosition:"",
		container_class:"min-container"
	}

  president : any;
  baseUrl : any =  'http://luxor.edu.eg:8098/';
  constructor(private service : UniversityServiceService) { }

  ngOnInit(): void {
    this.service.getUniversityPresident().subscribe(
      data=> this.president = data ,
      err=> console.log(err)
    )
  }

}
