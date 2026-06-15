import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);

  username = '';
  password = '';
  error = '';

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('isloggedin', 'true');
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid username or password.';
    }
  }
}