import { Component, OnInit, Input } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
declare  var handleLightGallery:  any;

@Component({
  selector: 'app-gallery4',
  templateUrl: './gallery4.component.html',
  styleUrls: ['./gallery4.component.css']
})
export class Gallery4Component implements OnInit {

	@Input()  data : any;

  constructor() { }
  
    ngOnInit(): void {
        (function ($) {
            handleMasonryFilter2();
            handleLightGallery();
        })(jQuery);
    }

}
