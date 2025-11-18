import { Component } from '@angular/core';
import { LesAmis } from './les-amis/les-amis';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-8',
  standalone: true,
  imports: [FormsModule,LesAmis],
  templateUrl: './exo-8.html',
  styleUrls: ['./exo-8.css'],
})
export class Exo8 {
  amiName: string = 'Dr.Mario';
}
