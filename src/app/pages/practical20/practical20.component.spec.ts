import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical20Component } from './practical20.component';

describe('Practical20Component', () => {
  let component: Practical20Component;
  let fixture: ComponentFixture<Practical20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
