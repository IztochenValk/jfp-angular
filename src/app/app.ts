import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';
import { Footer } from './footer/footer';


import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-go-go-go');
  count = 0;

  increment() {
    this.count++;
  }

}
