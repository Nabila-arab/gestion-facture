import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log("AuthGuard : accès autorisé");
      return true; // L'utilisateur est authentifié
    } else {
      console.warn("AuthGuard : accès refusé, redirection vers /login");
      this.router.navigate(['/login']); // Rediriger vers la page de connexion si non authentifié
      return false;
    }
  }
}
