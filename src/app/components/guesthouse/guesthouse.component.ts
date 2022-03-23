import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guesthouse',
  templateUrl: './guesthouse.component.html',
  styleUrls: ['./guesthouse.component.css']
})
export class GuesthouseComponent implements OnInit {
  banner : any = {
		pagetitle: "دار الضيافة",
		bg_image: "assets/images/banner/unibnr.jpg",
		title : "دار الضيافة",

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
