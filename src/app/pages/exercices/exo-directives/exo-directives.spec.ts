import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDirectives } from './exo-directives';

describe('ExoDirectives', () => {
  let component: ExoDirectives;
  let fixture: ComponentFixture<ExoDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
