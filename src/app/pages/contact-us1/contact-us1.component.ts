import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us1',
  templateUrl: './contact-us1.component.html',
  styleUrls: ['./contact-us1.component.css']
})
export class ContactUs1Component implements OnInit {


banner : any = {

		pagetitle: "تواصل معنا",
		bg_image: "assets/images/banner/contactbnr.jpg",
		title: "تواصل معنا",
	}



  constructor() { }

  ngOnInit(): void {
  }

}
