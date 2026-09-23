import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical15Component } from './practical15.component';

describe('Practical15Component', () => {
  let component: Practical15Component;
  let fixture: ComponentFixture<Practical15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
