import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevenCigale } from './steven-cigale';

describe('StevenCigale', () => {
  let component: StevenCigale;
  let fixture: ComponentFixture<StevenCigale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevenCigale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevenCigale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
