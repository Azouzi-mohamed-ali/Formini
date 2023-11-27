// navbar.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Assurez-vous de spécifier le bon chemin

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authService: AuthService) {} // Assurez-vous que le service est injecté en tant que propriété publique
}
