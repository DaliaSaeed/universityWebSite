import { GraduationStudyDepartmentService } from './../../services/graduation-study-department.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graduation-study-new-details',
  templateUrl: './graduation-study-new-details.component.html',
  styleUrls: ['./graduation-study-new-details.component.css']
})
export class GraduationStudyNewDetailsComponent implements OnInit {

  banner : any = {

		bg_image: "assets/images/banner/newsbnr.jpg",

	}

  New: any ;
  baseUrl = 'http://luxor.edu.eg:8098/';
  constructor(private service : GraduationStudyDepartmentService , private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.service.getNew(id).subscribe(
      data=>{
        this.New = data ,
        console.log(this.New)
      } ,
      err=> console.log(err)
    )
  }


}
