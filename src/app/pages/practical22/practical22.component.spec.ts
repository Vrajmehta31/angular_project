import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical22Component } from './practical22.component';

describe('Practical22Component', () => {
  let component: Practical22Component;
  let fixture: ComponentFixture<Practical22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
