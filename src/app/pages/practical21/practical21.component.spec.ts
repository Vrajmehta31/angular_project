import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical21Component } from './practical21.component';

describe('Practical21Component', () => {
  let component: Practical21Component;
  let fixture: ComponentFixture<Practical21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
