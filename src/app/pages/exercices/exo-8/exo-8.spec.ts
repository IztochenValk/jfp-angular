import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo8 } from './exo-8';

describe('Exo1', () => {
  let component: Exo8;
  let fixture: ComponentFixture<Exo8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
