import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical12Component } from './practical12.component';

describe('Practical12Component', () => {
  let component: Practical12Component;
  let fixture: ComponentFixture<Practical12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
