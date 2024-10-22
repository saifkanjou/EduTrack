import { Component, Inject, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  formBuilder = inject(FormBuilder);

 registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  
  constructor(private auth: AuthService, private router: Router) {}

 

  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.auth.RegisterUser(user).subscribe((response: any) => {
        console.log('User registered successfully', response);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem(
          'userInfo',
          JSON.stringify({
            // userId: response.userId,
            username: response.username,
            email: response.email,
          })
        );
        this.router.navigateByUrl('/courses');

      });
    }
  }
}
