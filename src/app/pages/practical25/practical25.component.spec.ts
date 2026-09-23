import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical25Component } from './practical25.component';

describe('Practical25Component', () => {
  let component: Practical25Component;
  let fixture: ComponentFixture<Practical25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
