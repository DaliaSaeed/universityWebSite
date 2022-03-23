import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-master',
  templateUrl: './about-master.component.html',
  styleUrls: ['./about-master.component.css']
})
export class AboutMasterComponent implements OnInit {
  banner : any = {
    title : 'برنامج الماجستير' ,
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
