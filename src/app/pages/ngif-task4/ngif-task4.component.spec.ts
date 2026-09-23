import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifTask4Component } from './ngif-task4.component';

describe('NgifTask4Component', () => {
  let component: NgifTask4Component;
  let fixture: ComponentFixture<NgifTask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifTask4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifTask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
