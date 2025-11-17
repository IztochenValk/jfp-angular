import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
  // Variables pour la dÃ©mo
  username: string = '';
  clickCount: number = 0;

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }

  onButtonClick() {
    this.clickCount++;
  }
}