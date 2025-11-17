import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriends } from './list-friends';

describe('ListFriends', () => {
  let component: ListFriends;
  let fixture: ComponentFixture<ListFriends>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFriends]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFriends);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
