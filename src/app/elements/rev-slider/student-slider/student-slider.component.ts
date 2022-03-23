import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_5:  any;
@Component({
  selector: 'app-student-slider',
  templateUrl: './student-slider.component.html',
  styleUrls: ['./student-slider.component.css']
})
export class StudentSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      dz_rev_slider_5();
  })(jQuery);
}

}
