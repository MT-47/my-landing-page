import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentdelete } from './studentdelete';

describe('Studentdelete', () => {
  let component: Studentdelete;
  let fixture: ComponentFixture<Studentdelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentdelete],
    }).compileComponents();

    fixture = TestBed.createComponent(Studentdelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
