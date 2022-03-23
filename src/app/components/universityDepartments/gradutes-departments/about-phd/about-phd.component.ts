import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-phd',
  templateUrl: './about-phd.component.html',
  styleUrls: ['./about-phd.component.css']
})
export class AboutPhdComponent implements OnInit {
  banner : any = {
    title : 'برنامج الدكتوراه' ,
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
