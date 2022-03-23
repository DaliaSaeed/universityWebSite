import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-university-goals',
  templateUrl: './university-goals.component.html',
  styleUrls: ['./university-goals.component.css']
})
export class UniversityGoalsComponent implements OnInit {
	banner : any = {
		pagetitle: "عن الجامعة",
		bg_image: "assets/images/banner/unibnr.jpg",
		title: "عن الجامعة",
	}

	layout : any = {
		sidebar: false,
		sidebarPosition:"",
		container_class:"min-container"
	}


  constructor() { }

  ngOnInit(): void {
  }

}
