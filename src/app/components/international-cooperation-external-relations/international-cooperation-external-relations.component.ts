import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international-cooperation-external-relations',
  templateUrl: './international-cooperation-external-relations.component.html',
  styleUrls: ['./international-cooperation-external-relations.component.css']
})
export class InternationalCooperationExternalRelationsComponent implements OnInit {
  banner : any = {
		pagetitle: "مكتـــب التـــعاون الدولـــي والــعلاقات الــخارجية",
		bg_image: "assets/images/banner/unibnr.jpg",
		title : "مكتـــب التـــعاون الدولـــي والــعلاقات الــخارجية",

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
