import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="practical-box">
      <h2>Admin Page</h2>
      <p>✅ Welcome, you are logged in as Admin!</p>
      <button (click)="logout()">Logout</button>
      <br><br>
      <a routerLink="/practical20">Back to Login Page</a>
    </div>
  `,
  styles: [`
    .practical-box { max-width: 450px; margin: 30px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif; text-align: center; }
    button { padding: 8px 16px; margin-top: 10px; }
  `]
})
export class AdminComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}