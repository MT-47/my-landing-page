import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departmentdelete } from './departmentdelete';

describe('Departmentdelete', () => {
  let component: Departmentdelete;
  let fixture: ComponentFixture<Departmentdelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departmentdelete],
    }).compileComponents();

    fixture = TestBed.createComponent(Departmentdelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
