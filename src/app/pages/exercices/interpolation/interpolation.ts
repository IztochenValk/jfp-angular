import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Hobbies {
  reading: string;
  cycling: string;
  cooking: string;
}
@Component({
  selector: 'app-interpolation',
  imports: [FormsModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  title: string = 'Bienvenue dans notre super mega cours Angular';
  description: string =
  "La text interpolation vous permet d'afficher des données dynamiques dans votre template.";
  currentDate: Date = new Date();

  xss:string= '<script>LOL</script>'
  username: string = 'John Doe';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  hobbies: Hobbies = {
    reading: 'Intermédiaire',
    cycling: 'Avancé',
    cooking: 'Débutant',
  };

  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  }
}