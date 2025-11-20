import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListFirebase } from './task-list-firebase';

describe('TaskListFirebase', () => {
  let component: TaskListFirebase;
  let fixture: ComponentFixture<TaskListFirebase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListFirebase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListFirebase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
