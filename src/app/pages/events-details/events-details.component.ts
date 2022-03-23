import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

banner : any = {

		pagetitle: "تفاصيل الخبر",
		bg_image: "assets/images/banner/newsbnr.jpg",
		title: "تفاصيل الخبر",
	}

  New: any ;
  baseUrl = 'http://luxor.edu.eg:8098/';
  constructor(private service : UniversityServiceService , private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.service.getNew(id).subscribe(
      data=>{
        this.New = data ,
        console.log(this.New)
      } ,
      err=> console.log(err)
    )
  }

}
