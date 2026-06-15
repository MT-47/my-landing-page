import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private key = 'isloggedin';

  isLogged = signal<boolean>(localStorage.getItem(this.key) != null);

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(this.key, 'true');
      this.isLogged.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.key);
    this.isLogged.set(false);
  }

  isLoggedIn(): boolean {
    return this.isLogged();
  }
}