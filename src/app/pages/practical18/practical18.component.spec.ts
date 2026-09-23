import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical18Component } from './practical18.component';

describe('Practical18Component', () => {
  let component: Practical18Component;
  let fixture: ComponentFixture<Practical18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
