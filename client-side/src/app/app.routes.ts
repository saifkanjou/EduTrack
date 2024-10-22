import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { EnrollmentsComponent } from './components/enrollments/enrollments.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

export const routes: Routes = [
    {path:"" , component:CoursesComponent},
    {path:"signup" ,component:SignupComponent },
    {path:"login" ,component:LoginComponent },
    {path:"courses" ,component:CoursesComponent },
    // {path:"reviews" ,component:ReviewsComponent },
    // {path:"enrollments" ,component:EnrollmentsComponent },
    { path: 'add-course', component: AddCourseComponent },
    {path:"add-course/:id" ,component:AddCourseComponent }
];
