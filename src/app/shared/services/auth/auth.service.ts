/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): boolean {
    if (username === 'usf@mallyance.fr' && password === 'usf123') {
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user'); // Vérifie si un user est stocké
  }

  logout(): void {
    localStorage.removeItem('user');
  }

}*/


import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/users/login', { username, password });
  }

// Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return localStorage.getItem('username') !== null;  // Ou vérifie le token
  }

  // Méthode pour se déconnecter
  logout(): void {
    localStorage.removeItem('username');
    // Ici tu peux aussi supprimer un token JWT s'il est ut

}
}