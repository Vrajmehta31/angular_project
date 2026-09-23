import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical17Component } from './practical17.component';

describe('Practical17Component', () => {
  let component: Practical17Component;
  let fixture: ComponentFixture<Practical17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
