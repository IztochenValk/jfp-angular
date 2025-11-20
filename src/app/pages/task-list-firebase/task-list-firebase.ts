import { environment } from './../../../environments/environment.development';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule,NgFor],
  // templateUrl: './task-list-firebase.html',
  template: `
    <div class="container mt-5">

      <h2>Liste des tâches</h2>
      <form (ngSubmit)="addTask()" class="d-flex mb-3">
        <input
          [(ngModel)]="newTask.title"
          name="task"
          type="text"
          placeholder="Nouvelle tâche"
          class="form-control me-2"
        />
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>

      <ul class="list-group">
        <li *ngFor="let task of tasks" class="list-group-item">{{ task.title }} Status  : {{task.status}}</li>
      </ul>
    </div>
  ` ,
})
export class TaskListFirebase {
  tasks: { title: string; status: string }[] = []; // Liste des tâches
  newTask = { title: '', status: 'pending' }; // Tâche à ajouter

  constructor(private db:Database){
    const tasksRef = ref(this.db, 'tasks');
    // Récupération en temps réel des tâches
    onValue(tasksRef, (snapshot) => {
      // .val pour récuperer toutes les données de la base dans tasks
      const data = snapshot.val();
      console.log(data);
      // console.log(data);
      // On récupère le méga objet tasks de la base mais on en fait un tableau d'objet de tasks
      this.tasks = data ? Object.values(data) : [];
      console.log(this.tasks);
    });
  }


  addTask() {
    if (this.newTask.title.trim()) {
      // On vise les tasks dans notre BDD
      const tasksRef = ref(this.db, 'tasks');
      const newTaskRef = push(tasksRef);
      set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
      this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
    }
  }

}