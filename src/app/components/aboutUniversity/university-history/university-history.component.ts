import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-history',
  templateUrl: './university-history.component.html',
  styleUrls: ['./university-history.component.css']
})
export class UniversityHistoryComponent implements OnInit {
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
