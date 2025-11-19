import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-active',
  standalone: true,
  templateUrl: './user-active.html'
})
export class UserActive {
  @Input() name = '';
  @Input() age = 0;
}
