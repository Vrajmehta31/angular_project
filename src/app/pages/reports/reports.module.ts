import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

@NgModule({
  declarations: [ReportsComponent],   // NgModules use "declarations", standalone components don't
  imports: [CommonModule, ReportsRoutingModule]
})
export class ReportsModule { }