import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-practical20',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './practical20.component.html',
  styleUrls: ['./practical20.component.css']
})
export class Practical20Component {
  constructor(public authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  goToAdmin(): void {
    this.router.navigate(['/admin']);   // ⬅ ADDED: explicit navigation with a click handler, easier to debug than a link
  }
}