import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../_services/account';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  private accountService = inject(AccountService);

  username = '';
  password = '';
  error = '';

  login() {
    if (this.accountService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid username or password.';
    }
  }
}