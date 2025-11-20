import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private router:Router = inject(Router)
  private auth: Auth = inject(Auth);

  // signUp() {
  //   createUserWithEmailAndPassword(this.auth, this.email, this.password)
  //     .then((userCredential) => {
  //       this.user = userCredential.user;
  //       console.log('Utilisateur inscrit:', userCredential);
  //       console.log('Utilisateur inscrit:', this.user);
  //     })
  //     .catch((error) => {
  //       this.error = error.message;
  //       console.error('Erreur d\'inscription:', error);
  //     });
  // }

  // Importez les fonctions nécessaires de 'firebase/auth' au début de votre fichier TypeScript
// (Assurez-vous que l'importation de 'createUserWithEmailAndPassword' est présente)

// ... reste de la classe (propriétés this.auth, this.email, this.password, etc.)

signUp() {
  // 1. Appel de la fonction Firebase Authentication
  // 'createUserWithEmailAndPassword' prend en paramètres :
  // a. L'instance d'authentification (this.auth)
  // b. L'email fourni par l'utilisateur (this.email)
  // c. Le mot de passe fourni par l'utilisateur (this.password)
  createUserWithEmailAndPassword(this.auth, this.email, this.password)
    // La méthode retourne une Promise. '.then()' est exécuté si l'inscription réussit.
    .then((userCredential) => {
      // 2. Traitement du succès de l'inscription

      // userCredential.user contient l'objet utilisateur (User) créé par Firebase.
      // Cet objet contient des informations comme l'UID, l'email, etc.
      this.user = userCredential.user;

      // Affichage de confirmation dans la console
      console.log('Utilisateur inscrit:', userCredential);
      console.log('Utilisateur inscrit:', this.user);
      // On fais la redirection vers une de nos routes cf le fichier app.routes.ts
      this.router.navigate(['/home']);


      // Ici, vous ajouteriez généralement :
      // - La navigation vers une autre page (ex: tableau de bord).
      // - La réinitialisation du formulaire ou l'affichage d'un message de succès.
      // - L'enregistrement d'informations supplémentaires de l'utilisateur dans Firestore/Realtime DB.
    })
    // '.catch()' est exécuté si l'inscription échoue (ex: email déjà utilisé, mot de passe trop court, format invalide).
    .catch((error) => {
      // 3. Gestion de l'erreur d'inscription

      // Stockage du message d'erreur pour l'afficher à l'utilisateur dans l'interface.
      this.error = error.message;

      // Affichage de l'erreur dans la console pour le débogage.
      console.error('Erreur d\'inscription:', error);

      // La variable 'error' contient des codes d'erreur (ex: 'auth/email-already-in-use')
      // qui peuvent être utilisés pour afficher des messages plus conviviaux à l'utilisateur.
    });
}

}
