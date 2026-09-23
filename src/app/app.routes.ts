import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Practical1Component } from './practical1/practical1.component';
import { Practical2Component } from './practical2/practical2.component';
import { Practical3Component } from './practical3/practical3.component';
import { Practical4Component } from './practical4/practical4.component';
import { Practical5Component } from './practical5/practical5.component';
import { DirectiveComponent } from './pages/directive/directive.component';
import { PipeExampleComponent } from './pages/pipe-example/pipe-example.component';
import { Practical7Component } from './practical7/practical7.component';
import { Practical8Component } from './practical8/practical8.component';
import { Practical9Component } from './practical9/practical9.component';
import { Practical10Component } from './practical10/practical10.component';
import { Practical11Component } from './practical11/practical11.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { ParentComponent } from './pages/parent/parent.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { LoginComponent } from './pages/login/login.component';
import { NgifTask1Component } from './pages/ngif-task1/ngif-task1.component';
import { NgifTask2Component } from './pages/ngif-task2/ngif-task2.component';
import { NgifTask3Component } from './pages/ngif-task3/ngif-task3.component';
import { NgifTask4Component } from './pages/ngif-task4/ngif-task4.component';
import { NgclassTask5Component } from './pages/task5/task5.component';
import { Task7Component } from './pages/task7/task7.component';
import { Task8Component } from './pages/task8/task8.component';
import { Task9Component } from './pages/task9/task9.component';
import { Task10Component } from './pages/task10/task10.component';
import { Task11Component } from './pages/task11/task11.component';
import { Practical12Component } from './pages/practical12/practical12.component';
import { AbbreviateNamePipe } from './pipes/abbreviate-name.pipe';
import { Practical13Component } from './pages/practical13/practical13.component';
import { OverdueHighlightDirective } from './directives/overdue-highlight.directive';
import { Practical14Component } from './pages/practical14/practical14.component';
import { Practical15Component } from './pages/practical15/practical15.component';
import { Practical16Component } from './pages/practical16/practical16.component';
import { StudentService } from './services/student.service';
import { Practical17Component } from './pages/practical17/practical17.component';
import { Practical18Component } from './pages/practical18/practical18.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { authGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { Practical20Component } from './pages/practical20/practical20.component';
import { AuthService } from './services/auth.service';
import { Practical21Component } from './pages/practical21/practical21.component';
import { Practical22Component } from './pages/practical22/practical22.component';
import { Practical24Component } from './pages/practical24/practical24.component';
import { Practical25Component } from './pages/practical25/practical25.component';
import { Practical26Component } from './pages/practical26/practical26.component';
import { Practical23Component } from './pages/practical23/practical23.component';
import { Practical27Component } from './pages/practical27/practical27.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'practical1', component: Practical1Component },
  { path: 'practical2', component: Practical2Component },
  { path: 'practical3', component: Practical3Component },
  { path: 'practical4', component: Practical4Component },
  { path: 'practical5', component: Practical5Component },
  { path: 'directive', component: DirectiveComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'practical7', component: Practical7Component },
  { path: 'practical8', component: Practical8Component },
  { path: 'practical9', component: Practical9Component },
  { path: 'practical10', component: Practical10Component },
  { path: 'practical11', component: Practical11Component },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ngif-task1', component: NgifTask1Component },
  { path: 'ngif-task2', component: NgifTask2Component },
  { path: 'ngif-task3', component: NgifTask3Component },
  { path: 'ngif-task4', component: NgifTask4Component },
  { path: 'ngclass-task5', component: NgclassTask5Component},
  { path: 'task7', component: Task7Component },
  { path: 'task8', component: Task8Component },
  { path: 'task9', component: Task9Component },
  { path: 'task10', component: Task10Component },
  { path: 'task11', component: Task11Component },
  { path: 'practical12', component: Practical12Component },
  { path: 'abbreviate-name', component: AbbreviateNamePipe },
  { path: 'practical13', component: Practical13Component },
  { path: 'overdue-highlight', component: OverdueHighlightDirective },
  {path: 'practical14', loadComponent: () => import('./pages/practical14/practical14.component').then(m => m.Practical14Component) },
  {path: 'practical15', component: Practical15Component },
  {path: 'practical16', component: Practical16Component },
  {path: 'practical17', component: Practical17Component },
  {path: 'practical18', component: Practical18Component },
  {path: 'student/:id', component: StudentDetailComponent },
  {path: 'practical20', component: Practical20Component },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'practical21', component: Practical21Component },
  { path: 'practical22', component: Practical22Component },
  { path: 'practical23', component: Practical23Component },
  { path: 'practical24', component: Practical24Component },
  { path: 'practical25', component: Practical25Component }, 
  { path: 'practical26', component: Practical26Component },
  { path: 'practical27', component: Practical27Component },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
