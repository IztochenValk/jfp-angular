import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class Binding {
    imageUrl = 'https://placehold.co/300x200?text=Image+Property';
    buttonDisabled = true;
    inputPlaceholder = 'Tapez votre texte ici';

    // 🟧 Variables pour Attribute Binding
    ariaLabel = 'Bouton important';
    customAttr = 'dynamique';

    // 🟨 Méthodes
    toggleButton() {
      this.buttonDisabled = !this.buttonDisabled;
    }

}