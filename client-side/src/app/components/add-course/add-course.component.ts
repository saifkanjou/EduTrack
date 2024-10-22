import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { ICourse } from '../../Interface/Course';
import { AuthService } from '../../service/auth.service';
declare var bootstrap: any;


@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],

  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
})
export class AddCourseComponent {
  isAuthenticated: boolean =false;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private auth : AuthService
  ) {}

  newCourse: any = {
    title: '',
    code: '',
    description: '',
    credits: 0,
  };

  courseId!: number;
  isUpdate = false;
  ngOnInit() {
    this.isAuthenticated=this.auth.isAuthenticated();

    this.courseId = this.route.snapshot.params['id'];
    if (this.courseId) {
      this.isUpdate = true;
      this.httpService.getCourseById(this.courseId).subscribe((res) => {
        this.newCourse = res;
      });
    }
  }


  save(): void {
    if (!this.isAuthenticated) {
      const loginAlertModal = new bootstrap.Modal(document.getElementById('loginAlertModal'));
      loginAlertModal.show();
      return;
    }
    if (this.isUpdate) {
      this.httpService
        .updateCourse(this.courseId, this.newCourse)
        .subscribe(() => {
          this.router.navigateByUrl('/courses');
        });
    }
    else{
      this.httpService.addCourse(this.newCourse).subscribe(() => {
        this.router.navigateByUrl('/courses');
      });
    }
  }
}
