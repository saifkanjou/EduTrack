import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client-side';
  isAuthenticated: boolean = false ;
  constructor(private auth: AuthService , private router : Router) {}

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.isAuthenticated = false;
    this.router.navigateByUrl('/courses');
  }
}
