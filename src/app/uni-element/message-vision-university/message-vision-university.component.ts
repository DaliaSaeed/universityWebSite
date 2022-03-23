import { UniversityServiceService } from 'src/app/services/university-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-vision-university',
  templateUrl: './message-vision-university.component.html',
  styleUrls: ['./message-vision-university.component.css']
})
export class MessageVisionUniversityComponent implements OnInit {
  public vision: any;
  public message: any;
  constructor(private service : UniversityServiceService) { }

  ngOnInit(): void {
    this.service.getUniversityVision().subscribe(
      data =>{ this.vision = data  },
      err=> console.log(err)
    );

    this.service.getUniversityMessage().subscribe(
      data=> this.message = data ,
      err=> console.log(err)
    )
  }

}
