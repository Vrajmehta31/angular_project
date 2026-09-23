import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical14Component } from './practical14.component';

describe('Practical14Component', () => {
  let component: Practical14Component;
  let fixture: ComponentFixture<Practical14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
