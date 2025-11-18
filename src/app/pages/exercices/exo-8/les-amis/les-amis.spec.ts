import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesAmis } from './les-amis';

describe('LesAmis', () => {
  let component: LesAmis;
  let fixture: ComponentFixture<LesAmis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesAmis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesAmis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
