// auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): Observable<boolean> {
    // Ajoutez la logique d'authentification ici
    // Vous pouvez également communiquer avec le backend pour vérifier les informations d'identification
    this.isAuthenticated = true;
    return of(true);
  }

  register(username: string, password: string): Observable<boolean> {
    // Ajoutez la logique d'enregistrement ici
    // Vous pouvez également communiquer avec le backend pour créer un nouvel utilisateur
    this.isAuthenticated = true;
    return of(true);
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
