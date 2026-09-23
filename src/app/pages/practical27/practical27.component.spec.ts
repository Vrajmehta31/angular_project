import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Practical27Component } from './practical27.component';

describe('Practical27Component', () => {
  let component: Practical27Component;
  let fixture: ComponentFixture<Practical27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical27Component]   // standalone components go in "imports", not "declarations"
    }).compileComponents();

    fixture = TestBed.createComponent(Practical27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct full name with default values', () => {
    expect(component.getFullName()).toBe('Raj Patel');
  });

  it('should return the correct full name for different inputs', () => {
    component.firstName = 'Sonal';
    component.lastName = 'K Patel';
    expect(component.getFullName()).toBe('Sonal K Patel');
  });

  it('should trim extra whitespace if lastName is empty', () => {
    component.firstName = 'Vraj';
    component.lastName = '';
    expect(component.getFullName()).toBe('Vraj');
  });
});
