import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_5:  any;

@Component({
  selector: 'app-confrence-slider',
  templateUrl: './confrence-slider.component.html',
  styleUrls: ['./confrence-slider.component.css']
})
export class ConfrenceSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      dz_rev_slider_5();
  })(jQuery);
  }

}


