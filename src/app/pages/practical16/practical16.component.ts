import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-practical16',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practical16.component.html',
  styleUrls: ['./practical16.component.css']
})
export class Practical16Component implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data.slice(0, 10);
      });
  }
}