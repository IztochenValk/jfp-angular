import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Randomizer } from './randomizer';

describe('Randomizer', () => {
  let component: Randomizer;
  let fixture: ComponentFixture<Randomizer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Randomizer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Randomizer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
