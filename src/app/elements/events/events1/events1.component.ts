import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';
declare  var jQuery:  any;

@Component({
  selector: 'app-events1',
  templateUrl: './events1.component.html',
  styleUrls: ['./events1.component.css']
})
export class Events1Component implements OnInit {

  News:    any    = [];
  baseUrl: string = 'http://luxor.edu.eg:8098/';
  New1:    any ;
  New2:    any;
  New3:    any;
  constructor(private service :UniversityServiceService) { }

	ngOnInit(): void {

     this.service.getNews().subscribe(
       data =>{
         this.News = data as any []  ;
         this.New1 = this.News[0];
         this.New2 = this.News[1];
         this.New3 = this.News[3];

         console.log(this.New1)

      } ,
       err => console.log(err)
     );

		(function ($) {
			jQuery('.blog-carousel').owlCarousel({
				loop:true,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: 3000,
				margin:30,
				nav:true,
				dots: false,
				navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
				responsive:{
					0:{
						items:1
					},
			  	500:{
						items:2
					},
					1000:{
						items:3
					}
				}
			});
		})(jQuery);
	}

}
