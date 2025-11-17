import { Component } from '@angular/core';

@Component({
  selector: 'app-list-friends',
  imports: [],
  templateUrl: './list-friends.html',
  styleUrl: './list-friends.css',
})
export class ListFriends {

  friendName: string = '';
  friendsList: string[] = [];
  friendAdded: Boolean = false;
  youHave0Friend: string = 'Vous êtes un paria social, le suicide vous attend!🥳'
  youHaveSomeFriends: string = `Votre ami a été ajouté !🥳`;

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.friendName = input.value;
    this.friendAdded = false
  }

  addFriend(){
    this.friendsList.push(`<li>${this.friendName}</li>`);
    this.friendName = ''
    this.friendAdded = true
  }

}
