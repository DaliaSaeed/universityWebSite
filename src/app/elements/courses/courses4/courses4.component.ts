import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;

@Component({
  selector: 'app-courses4',
  templateUrl: './courses4.component.html',
  styleUrls: ['./courses4.component.css']
})
export class Courses4Component implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
	  (function ($) {
        handleMasonryFilter2();
    })(jQuery);
  
  }
}
