import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departmentlist } from './departmentlist';

describe('Departmentlist', () => {
  let component: Departmentlist;
  let fixture: ComponentFixture<Departmentlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departmentlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Departmentlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
