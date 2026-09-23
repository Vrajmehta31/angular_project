import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifTask2Component } from './ngif-task2.component';

describe('NgifTask2Component', () => {
  let component: NgifTask2Component;
  let fixture: ComponentFixture<NgifTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifTask2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
