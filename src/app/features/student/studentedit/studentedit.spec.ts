import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentedit } from './studentedit';

describe('Studentedit', () => {
  let component: Studentedit;
  let fixture: ComponentFixture<Studentedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Studentedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
