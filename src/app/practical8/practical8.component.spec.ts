import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical8Component } from './practical8.component';

describe('Practical8Component', () => {
  let component: Practical8Component;
  let fixture: ComponentFixture<Practical8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
