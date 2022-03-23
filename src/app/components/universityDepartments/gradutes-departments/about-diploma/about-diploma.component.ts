import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-diploma',
  templateUrl: './about-diploma.component.html',
  styleUrls: ['./about-diploma.component.css']
})
export class AboutDiplomaComponent implements OnInit {
	banner : any = {
    title : 'برنامج الدبلومة' ,
    bg_image: "assets/images/banner/bnr6.jpg",

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
