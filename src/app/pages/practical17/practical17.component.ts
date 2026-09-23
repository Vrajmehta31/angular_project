import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-practical17',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practical17.component.html',
  styleUrls: ['./practical17.component.css']
})
export class Practical17Component implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const users$: Observable<User[]> = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    users$.subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error fetching users:', err),
      complete: () => console.log('User fetch complete')
    });
  }
}
