import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exo-directives',
  imports: [CommonModule],
  templateUrl: './exo-directives.html',
  styleUrl: './exo-directives.css',
})
export class ExoDirectives {
  displayDetails: boolean = true;
  rowNumber: number = 0;
  style5 = {
    backgroundColor: 'green',
    color: 'white'
  };  
  switchDisplay():void{
    this.displayDetails = !this.displayDetails
  }
  addRow():void{
    this.rowNumber++;
  }
  get rows(): number[] {
    return Array.from({ length: this.rowNumber }, (_, i) => i + 1);
  }

}
