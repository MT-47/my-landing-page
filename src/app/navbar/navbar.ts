import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AccountService } from '../_services/account';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  accountService = inject(AccountService);
  private router = inject(Router);

  logout() {
    this.accountService.logout();
    this.router.navigate(['/login']);
  }
}