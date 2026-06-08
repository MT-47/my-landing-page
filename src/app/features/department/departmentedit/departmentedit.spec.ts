import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departmentedit } from './departmentedit';

describe('Departmentedit', () => {
  let component: Departmentedit;
  let fixture: ComponentFixture<Departmentedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departmentedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Departmentedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
