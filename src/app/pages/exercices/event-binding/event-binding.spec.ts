import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBinding } from './event-binding';

describe('EventBinding', () => {
  let component: EventBinding;
  let fixture: ComponentFixture<EventBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
