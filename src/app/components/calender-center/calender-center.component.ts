import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender-center',
  templateUrl: './calender-center.component.html',
  styleUrls: ['./calender-center.component.css']
})
export class CalenderCenterComponent implements OnInit {

  banner : any = {
		pagetitle: "مركز التقويم والقياس",
		bg_image: "assets/images/banner/unibnr.jpg",
		title : "مركز التقويم والقياس",

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
