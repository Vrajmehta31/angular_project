import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical11Component } from './practical11.component';

describe('Practical11Component', () => {
  let component: Practical11Component;
  let fixture: ComponentFixture<Practical11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
