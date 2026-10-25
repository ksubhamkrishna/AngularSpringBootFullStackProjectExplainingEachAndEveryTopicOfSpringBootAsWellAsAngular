import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAndValidation } from './form-and-validation';

describe('FormAndValidation', () => {
  let component: FormAndValidation;
  let fixture: ComponentFixture<FormAndValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAndValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(FormAndValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
