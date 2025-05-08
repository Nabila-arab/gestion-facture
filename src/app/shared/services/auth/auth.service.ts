import { Injectable } from '@angular/core';

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

}
