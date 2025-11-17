import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolation } from './interpolation';

describe('Interpolation', () => {
  let component: Interpolation;
  let fixture: ComponentFixture<Interpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interpolation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
