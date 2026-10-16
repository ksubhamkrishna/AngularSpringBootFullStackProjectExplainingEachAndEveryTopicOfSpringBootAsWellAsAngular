import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleComponent } from './ng-style';

describe('NgStyle', () => {
  let component: NgStyleComponent;
  let fixture: ComponentFixture<NgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgStyleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
