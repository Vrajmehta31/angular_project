import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical26Component } from './practical26.component';

describe('Practical26Component', () => {
  let component: Practical26Component;
  let fixture: ComponentFixture<Practical26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practical26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
