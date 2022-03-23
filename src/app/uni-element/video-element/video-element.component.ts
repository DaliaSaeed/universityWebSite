import { UniversityServiceService } from 'src/app/services/university-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
declare  var handleLightGallery:  any;

@Component({
  selector: 'app-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.css']
})
export class VideoElementComponent implements OnInit {
  videos : any = [];
  baseurl : any = 'http://luxor.edu.eg:8098/';
  @ViewChild('videoPlayer') videoPlayer: any;
  constructor(private service : UniversityServiceService) { }


    ngOnInit(): void {

      (function ($) {
          handleMasonryFilter2();
          handleLightGallery();
      })(jQuery);


      this.service.getUniversityVideo().subscribe(
        data=>{this.videos = data  as any[] ;},
        err=> console.log(err)
      )
  }

   public toggleVideo() {
    this.videoPlayer.nativeElement.play();
   }

  }

