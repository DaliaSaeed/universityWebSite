import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-goals-elment',
  templateUrl: './goals-elment.component.html',
  styleUrls: ['./goals-elment.component.css']
})
export class GoalsElmentComponent implements OnInit {

  uniGoals : any;
  baseUrl : any =  'http://luxor.edu.eg:8098/';
  constructor(private service : UniversityServiceService) { }


  ngOnInit(): void {
    this.service.getUniversityGoals().subscribe(
      data => this.uniGoals = data ,
      err=> console.log(err)
    )
  }

}
