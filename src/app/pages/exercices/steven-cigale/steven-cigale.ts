import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steven-cigale',
  templateUrl: './steven-cigale.html',
})
export class StevenCigale {
  @Input() imageUrl = 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg';

  @Input() fullName = 'Steven Cigale';
  @Input() status = 'Offline';
  @Input() age = 25;
  @Input() bio = 'Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.';
  @Input() reputation = 'Ringard';
}
