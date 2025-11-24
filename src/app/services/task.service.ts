import { Injectable } from '@angular/core';
import { Database, ref, push, set, remove, update } from '@angular/fire/database';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private db: Database) {}

  getTasksRef() {
    return ref(this.db, 'tasks');
  }

  addTask(task: Task) {
    const tasksRef = ref(this.db, 'tasks');
    const newTaskRef = push(tasksRef);
    return set(newTaskRef, task);
  }

  deleteTask(id: string) {
    const taskRef = ref(this.db, `tasks/${id}`);
    return remove(taskRef);
  }

  toggleStatus(task: Task) {
    const nextStatus = task.status === 'pending' ? 'completed' : 'pending';
    const taskRef = ref(this.db, `tasks/${task.id}`);
    return update(taskRef, { status: nextStatus });
  }
}
