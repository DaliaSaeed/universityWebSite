import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fldp',
  templateUrl: './fldp.component.html',
  styleUrls: ['./fldp.component.css']
})
export class FLDPComponent implements OnInit {
	banner : any = {
		pagetitle: "مركز تنمية قدرات أعضاء هيئة التدريس والقيادات",
		bg_image: "assets/images/banner/unibnr.jpg",
		title: "مركز تنمية قدرات أعضاء هيئة التدريس والقيادات",
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
