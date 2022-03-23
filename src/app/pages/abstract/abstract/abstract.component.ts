import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
  banner : any = {

		pagetitle: "نبذه مختصره",
		bg_image: "assets/images/banner/newsbnr.jpg",
		title: "نبذه مختصره",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
