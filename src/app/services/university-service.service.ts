import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  baseUrl : string = 'http://luxor.edu.eg:8098/api/';
  constructor( private http: HttpClient) { }

  public getNews()
  {
    let url = 'UniversityNews/getAllNews';
    return this.http.get(this.baseUrl+url);
  }

  public getNew(id : any )
  {
    let url = 'UniversityNews/getNew/'+id;
    return this.http.get(this.baseUrl+url);
  }

  public getUniversityPresident ()
  {
    let url = 'UniversityPresident/GetLastPresident';
    return this.http.get(this.baseUrl+url);
  }

  public getUniversityGoals ()
  {
    let url = 'UniversityGoals/GetAllUniGoals' ;
    return this.http.get(this.baseUrl+url);
  }

  public getUniversityVision ()
  {
    let url = 'UniversityVision/GetLastUniVision';
    return this.http.get(this.baseUrl+url);
  }

  public getUniversityMessage()
  {
    let url = 'UniversityMessage/GetLastUniMessage'
    return this.http.get(this.baseUrl+url);
  }

  public getUniversityVideo()
  {
    let url = 'UniversityVideosControlller/getAllVideos';
    return this.http.get(this.baseUrl+url);
  }
}
