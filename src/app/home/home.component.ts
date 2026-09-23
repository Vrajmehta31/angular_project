import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  practicals = [
    { title: 'Practical 1', link: '/practical1' },
    { title: 'Practical 2', link: '/practical2' },
    { title: 'Practical 3', link: '/practical3' },
    { title: 'Practical 4', link: '/practical4' },
    { title: 'Practical 5', link: '/practical5' },
    { title: 'Practical 7', link: '/practical7' },
    { title: 'Practical 8', link: '/practical8' },
    { title: 'Practical 9', link: '/practical9' },
    { title: 'Practical 10', link: '/practical10' },
    { title: 'Practical 11', link: '/practical11' },
    { title: 'Directive', link: '/directive' },
    { title: 'Pipe', link: '/pipe' },
    { title: 'Lifecycle', link: '/lifecycle' },
    { title: 'Parent', link: '/parent' },
    { title: 'Photos', link: '/photos' },
     { title: 'ngIf Task 1', link: '/ngif-task1' }, 
    { title: 'ngIf Task 2', link: '/ngif-task2' },
    { title: 'ngIf Task 3', link: '/ngif-task3' },
    { title: 'ngIf Task 4', link: '/ngif-task4' },
    { title: 'ngClass Task 5', link: '/ngclass-task5' },
    { title: 'Task 7', link: '/task7' },
    { title: 'Task 8', link: '/task8' },
    { title: 'Task 9', link: '/task9' },
    { title: 'Task 10', link: '/task10' },
    { title: 'Task 11', link: '/task11' },
    { title: 'Practical 12', link: '/practical12' },
    { title: 'Practical 13', link: '/practical13' },
    { title: 'Practical 14', link: '/practical14' },
    { title: 'Practical 15', link: '/practical15' },
    { title: 'Practical 16', link: '/practical16' },
    { title: 'Practical 17', link: '/practical17' },
    { title: 'Practical 18', link: '/practical18' },
   { title: 'Student Detail', link: '/student/1' }, // Example student detail route
   { title: 'Admin Page', link: '/admin' }, // Admin page route
   {title: 'Practical 20', link: '/practical20' }, // Practical 20 route
    {title: 'Practical 21', link: '/practical21' }, // Practical 21 route
    {title: 'Practical 22', link: '/practical22' }, // Practical 22 route
    {title: 'Practical 24', link: '/practical24' }, // Practical 24 route
    {title: 'Practical 25', link: '/practical25' }, // Practical 25 route
    {title: 'Practical 26', link: '/practical26' }, // Practical 26 route
    {title: 'Practical 23', link: '/practical23' },  // Practical 23 route
    {title: 'Practical 27', link: '/practical27' },  // Practical 27 route
    { title: 'Reports', link: '/reports' }, // Lazy-loaded Reports module route
  ];
}
