import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraduationStudyDepartmentService {
  private baseUrl : string = 'http://luxor.edu.eg:8098/api/';
  constructor( private http: HttpClient) { }

  public getAllNews ()
  {
    let url = 'GraduationStudyNews/getAllGraduationStudyNews';
    return this.http.get(this.baseUrl+url);
  }


  public getNew  (id : any)
  {
    let url = 'GraduationStudyNews/getGraduationStudyNew/'+id;
   return this.http.get(this.baseUrl+url);
  }


  public getIntro()
  {
    let url = 'GraduteStudyInfo/GetLastGraduteStudyInfo' ;
    return this.http.get(this.baseUrl+url);
  }


  public getManager()
  {
    let url = 'GraduteStudyManagers/GetLastGraduteStudyManagers' ;
    return this.http.get(this.baseUrl+url);
  }

}
