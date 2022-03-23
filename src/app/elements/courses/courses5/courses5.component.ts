import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
// declare  var handleLightGallery:  any;

@Component({
  selector: 'app-courses5',
  templateUrl: './courses5.component.html',
  styleUrls: ['./courses5.component.css']
})
export class Courses5Component implements OnInit {

  constructor() { }
        ngOnInit(): void {
            (function ($) {
                handleMasonryFilter2();
                // handleLightGallery();
            })(jQuery);
          
        }

}
