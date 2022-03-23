import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_5:  any;
@Component({
  selector: 'app-gradute-slider',
  templateUrl: './gradute-slider.component.html',
  styleUrls: ['./gradute-slider.component.css']
})
export class GraduteSliderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
	  (function ($) {
        dz_rev_slider_5();
    })(jQuery);
  }

}
