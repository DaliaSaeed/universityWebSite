import { UniversityServiceService } from 'src/app/services/university-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

banner : any = {

		pagetitle: "الأخبار",
		bg_image: "assets/images/banner/newsbnr.jpg",
		title: "الأخبار",
	}


  events : any ;
  baseUrl = 'http://luxor.edu.eg:8098/';
	constructor(private service : UniversityServiceService) { }

  ngOnInit(): void {

    this.service.getNews().subscribe(
      data=> this.events = data as any[] ,
      err => console.log(err)
    )
  }

}
