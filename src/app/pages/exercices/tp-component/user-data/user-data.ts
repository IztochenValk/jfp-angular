import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-data.html'
})
export class UserData {
  @Input() hasError = false;
  @Output() updateUser = new EventEmitter<any>()
  isError: Boolean = false
  userName = ''
  userAge: number | null = null

  onSubmit() {
    if (!this.userName || this.userName.length < 3 || !this.userAge || this.userAge <= 0) {
      this.updateUser.emit(null)
      return
    }

    this.updateUser.emit({
      name: this.userName.trim(),
      age: this.userAge
    })
  }
}
