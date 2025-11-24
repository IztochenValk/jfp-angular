import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { onValue } from '@angular/fire/database';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list-firebase',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './task-list-firebase.html'
})
export class TaskListFirebase {
  tasks: Task[] = [];
  newTask = { title: '', status: 'pending' };

  constructor(private taskService: TaskService) {
    const tasksRef = this.taskService.getTasksRef();
    onValue(tasksRef, snapshot => {
      const data = snapshot.val() || {};
      this.tasks = Object.entries<any>(data).map(([id, value]) => ({
        id,
        title: value.title,
        status: value.status
      }));
    });
  }

  addTask() {
    const title = this.newTask.title.trim();
    if (!title) return;
    this.taskService.addTask({ title, status: 'pending' }).then(() => {
      this.newTask = { title: '', status: 'pending' };
    });
  }

  onToggleStatus(task: Task) {
    this.taskService.toggleStatus(task);
  }

  onDelete(task: Task) {
    if (!task.id) return;
    this.taskService.deleteTask(task.id);
  }
}
