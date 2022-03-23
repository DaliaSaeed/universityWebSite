import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-graduationcounter',
  templateUrl: './graduationcounter.component.html',
  styleUrls: ['./graduationcounter.component.css']
})
export class GraduationcounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
		(function ($) {

			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});

		})(jQuery);
	}

}
