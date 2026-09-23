import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical23Component } from './practical23.component';

describe('Practical23Component', () => {
  let component: Practical23Component;
  let fixture: ComponentFixture<Practical23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
