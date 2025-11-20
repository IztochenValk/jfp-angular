import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Cela permet à Angular de gérer l'injection de dépendances
})
export class AuthGuardService implements CanActivate {

  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('Utilisateur authentifié:', user);
          observer.next(true);  // Si l'utilisateur est authentifié, on autorise l'accès
          // Redirection ????
        } else {
          observer.next(false);
          console.log('Redirection vers la page de connexion')
          // Si l'utilisateur n'est pas authentifié, on redirige vers la page de login
          this.router.navigate(['/login']); // Redirection vers le login
        }
      });
    });
  }
}