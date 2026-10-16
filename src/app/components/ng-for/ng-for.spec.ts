import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForComponent } from './ng-for';

describe('NgFor', () => {
  let component: NgForComponent;
  let fixture: ComponentFixture<NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgForComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
