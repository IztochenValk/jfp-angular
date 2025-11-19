import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActive } from './user-active';

describe('UserActive', () => {
  let component: UserActive;
  let fixture: ComponentFixture<UserActive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserActive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
