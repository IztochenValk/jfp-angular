import { Component } from '@angular/core';
import {UserData} from './user-data/user-data'
import {UserActive} from './user-active/user-active'

  type User = {
    name: string;
    age: number;
  }
@Component({
  selector: 'app-tp-component',
  imports: [UserData, UserActive],
  templateUrl: './tp-component.html',
  styleUrl: './tp-component.css',
  standalone: true,
})
export class TpComponent {

  user: User = {
    name: 'Maître Yoda',
    age: 900
  };

  isError = false

  onUpdateUser(newUser: User | null): void {
    if (!newUser) {
      this.isError = true
      return
    }

    this.isError = false
    this.user = { ...newUser }
  }

}
