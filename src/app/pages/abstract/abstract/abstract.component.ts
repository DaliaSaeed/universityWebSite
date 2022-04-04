import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
  banner : any = {

		pagetitle: "المؤتمر الثاني لكليه الألسن",
		bg_image: "assets/images/banner/newsbnr.jpg",
		title: "المؤتمر الثاني لكليه الألسن",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
