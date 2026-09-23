import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical10Component } from './practical10.component';

describe('Practical10Component', () => {
  let component: Practical10Component;
  let fixture: ComponentFixture<Practical10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
