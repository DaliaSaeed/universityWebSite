import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {
  banner : any = {

		pagetitle: "المؤتمرات",
		bg_image: "assets/images/banner/newsbnr.jpg",
		title: "المؤتمرات",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
