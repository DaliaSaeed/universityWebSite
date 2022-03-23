import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-vision-message',
  templateUrl: './university-vision-message.component.html',
  styleUrls: ['./university-vision-message.component.css']
})
export class UniversityVisionMessageComponent implements OnInit {
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
