import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical24Component } from './practical24.component';

describe('Practical24Component', () => {
  let component: Practical24Component;
  let fixture: ComponentFixture<Practical24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
