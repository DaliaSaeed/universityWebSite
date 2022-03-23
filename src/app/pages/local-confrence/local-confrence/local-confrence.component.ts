import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-confrence',
  templateUrl: './local-confrence.component.html',
  styleUrls: ['./local-confrence.component.css']
})
export class LocalConfrenceComponent implements OnInit {
  banner : any = {

		pagetitle: "المؤتمرات المحليه",
		bg_image: "assets/images/banner/newsbnr.jpg",
		title: "المؤتمرات المحليه",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
