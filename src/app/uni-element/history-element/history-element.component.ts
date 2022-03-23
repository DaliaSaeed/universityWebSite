import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-element',
  templateUrl: './history-element.component.html',
  styleUrls: ['./history-element.component.css']
})
export class HistoryElementComponent implements OnInit {

    public baseUrl1:string = 'http://luxor.edu.eg:8098/StaticFiles/UniversityResources/Images/UniversityPresident/President.jpg';
   public baseUrl2:string = 'http://luxor.edu.eg:8098/StaticFiles/UniversityResources/Images/UniversityPresident/oldPresident.jpg';

   constructor() { }

  ngOnInit(): void {
  }

}
