import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { interval, map, Observable, Subscription } from 'rxjs'
@Component({
  selector: 'app-randomizer',
  imports: [FormsModule],
  templateUrl: './randomizer.html',
  styleUrl: './randomizer.css',
  standalone: true
})
export class Randomizer {
  private sub?: Subscription | null;
  public randomNumber: Number = 0;
  public NumberTypes : 'all' | 'even' | 'odd' = 'all'
  
  private generator$: Observable<number> = interval(1000).pipe(map(()=>{
    return this.randomNumber = Math.floor(Math.random() * 100);
  }))
  
  public launchGenerator(){
    this.sub = this.generator$.subscribe(value=> console.log(value))
  }
  public stopGenerator(){
    this.sub?.unsubscribe()
    this.sub = null;
  }
  public filterNumbers(type: string){
    //this.displayTypes = type
  }
}
