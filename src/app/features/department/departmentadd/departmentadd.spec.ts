import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departmentadd } from './departmentadd';

describe('Departmentadd', () => {
  let component: Departmentadd;
  let fixture: ComponentFixture<Departmentadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departmentadd],
    }).compileComponents();

    fixture = TestBed.createComponent(Departmentadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
