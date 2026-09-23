import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical9Component } from './practical9.component';

describe('Practical9Component', () => {
  let component: Practical9Component;
  let fixture: ComponentFixture<Practical9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
