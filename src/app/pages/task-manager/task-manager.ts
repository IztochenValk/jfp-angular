import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

export interface Task {
  title: string;
  priority: 'low' | 'medium' | 'high';
  isCompleted: boolean;
}

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css'
})
export class TaskManager {
  tasks = signal<Task[]>([]);
  newTitle = signal('');
  newPriority = signal<'low' | 'medium' | 'high'>('medium');

sortedTasks = computed(() => {
  let high = [];
  let medium = [];
  let low = [];

  for (let task of this.tasks()) {
    if (task.priority === 'high') high.push(task);
    else if (task.priority === 'medium') medium.push(task);
    else low.push(task);
  }

  return [...high, ...medium, ...low];
});


  completedCount = computed(() => this.tasks().filter(task => task.isCompleted).length);
  remainingCount = computed(() => this.tasks().filter(task => !task.isCompleted).length);
  allCompleted = computed(() => this.tasks().length > 0 && this.remainingCount() === 0);

  setTitle(value: string) {
    this.newTitle.set(value.toString());
  }

  setPriority(value: string) {
    if (value === 'low' || value === 'medium' || value === 'high') {
      this.newPriority.set(value);
    }
  }

  addTask() {
    const title = this.newTitle().trim();
    if (!title) return;
    const task: Task = {
      title,
      priority: this.newPriority(),
      isCompleted: false
    };
    this.tasks.update(list => [...list, task]);
    this.newTitle.set('');
  }

  toggleTask(task: Task) {
    this.tasks.update(list => 
        list.map(t => 
          (t === task ? { ...t, isCompleted: !t.isCompleted } : t)
    ));
  }

  removeTask(task: Task) {
    this.tasks.update(list => list.filter(t => t !== task));
  }
}
