import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(email: string, password: string): Observable<boolean> {
    // Replace this with actual API call
    if (email === 'test@example.com' && password === 'WL2025') {
      this.isAuthenticated = true;
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}