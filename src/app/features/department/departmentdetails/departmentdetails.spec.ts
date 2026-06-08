import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departmentdetails } from './departmentdetails';

describe('Departmentdetails', () => {
  let component: Departmentdetails;
  let fixture: ComponentFixture<Departmentdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departmentdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Departmentdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
