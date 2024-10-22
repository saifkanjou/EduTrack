import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../Interface/Course';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'http://localhost:5035';

  
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  

  getCourses() {
    return this.http.get(this.apiUrl + "/api/Course");
  }
  

  addCourse(course: ICourse){
    return this.http.post(this.apiUrl + "/api/Course" , course, {headers: this.getHeaders()});
  }

  deleteCourse(id : number){
    return this.http.delete(this.apiUrl + "/api/Course/" + id,{headers: this.getHeaders()});
  }

  updateCourse(id : number, course: any){
    return this.http.put(this.apiUrl + "/api/Course/" + id, course ,{headers: this.getHeaders()});
  }
  

  getCourseById(id: number){
    return this.http.get(this.apiUrl + "/api/Course/" + id);
  }
}
