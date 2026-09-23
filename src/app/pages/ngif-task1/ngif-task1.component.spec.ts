import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifTask1Component } from './ngif-task1.component';

describe('NgifTask1Component', () => {
  let component: NgifTask1Component;
  let fixture: ComponentFixture<NgifTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifTask1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
