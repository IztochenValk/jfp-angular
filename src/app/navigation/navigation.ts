import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  currentUser: string | null = null;

  constructor(private auth: Auth) {
    // Vérifier si un utilisateur est connecté
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.currentUser = user.email; // Ou utilisez `user.displayName` si disponible
      } else {
        this.currentUser = null;
      }
    });
  }

  async logOut(): Promise<void> {
    // console.log(this.currentUser);
    try {
      await signOut(this.auth);
      console.log('Utilisateur déconnecté avec succès.');
      this.currentUser = null; // Réinitialiser l'état utilisateur
      //! Rajouter de la redirection avec router.navigate
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }
}