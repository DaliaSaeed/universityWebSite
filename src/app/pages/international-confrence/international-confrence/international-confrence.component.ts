import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international-confrence',
  templateUrl: './international-confrence.component.html',
  styleUrls: ['./international-confrence.component.css']
})
export class InternationalConfrenceComponent implements OnInit {
  banner : any = {

		pagetitle: "المؤتمرات العالميه",
		bg_image: "assets/images/banner/newsbnr.jpg",
		title: "المؤتمرات العالميه",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
