// src/app/pages/exercices/exo-8/les-amis/les-amis.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'les-amis',
  standalone: true,
  templateUrl: './les-amis.html',
  styleUrls: ['./les-amis.css'],
  imports: [ FormsModule, NgIf, NgFor]
})
export class LesAmis {
  amiName: string = 'Dr.Mario';
  lesAmisCreationStatus: string = '';
  listFriendCreated: boolean = false;
  onCreationAmi() {
    this.listFriendCreated = true;
    this.lesAmisCreationStatus = `Un ami a été créé ! (${this.amiName})`;
  }
  
}
