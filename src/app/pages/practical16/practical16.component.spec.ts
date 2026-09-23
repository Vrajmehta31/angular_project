import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical16Component } from './practical16.component';

describe('Practical16Component', () => {
  let component: Practical16Component;
  let fixture: ComponentFixture<Practical16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
