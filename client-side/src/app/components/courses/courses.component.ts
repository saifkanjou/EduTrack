import { Component } from '@angular/core';
import { inherits } from 'util';
import { HttpService } from '../../service/http.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ICourse } from '../../Interface/Course';
import { AuthService } from '../../service/auth.service';
declare var bootstrap: any;


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  coursesList: any = [];
  isAuthenticated: boolean =false;


  constructor(private httpService: HttpService, private router: Router, private auth : AuthService) {
    this.coursesList.forEach(() => this.showReviews.push(false));
  }

  ngOnInit() {
    this.isAuthenticated=this.auth.isAuthenticated();
    this.httpService.getCourses().subscribe((res) => {
      this.coursesList = res;
      console.log(res); 
    });
  }

  
  showReviews: boolean[] = [];

 
  toggleReviews(index: number): void {
    this.showReviews[index] = !this.showReviews[index];
  }

  deleteCourse(id: number) {
    if (!this.isAuthenticated) {
      const loginAlertModal = new bootstrap.Modal(document.getElementById('loginAlertModal'));
      loginAlertModal.show();
      return;
    }
    this.httpService.deleteCourse(id).subscribe((res) => {
      this.coursesList = this.coursesList.filter((x: any) => x.courseId != id);
    });
  }

  updateCourse(id: number) {
    this.router.navigateByUrl('/add-course/' + id);
  }
}
