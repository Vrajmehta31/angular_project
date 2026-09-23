import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical13Component } from './practical13.component';

describe('Practical13Component', () => {
  let component: Practical13Component;
  let fixture: ComponentFixture<Practical13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
