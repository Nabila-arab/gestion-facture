import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log("AuthGuard : accès autorisé");
      return true;
    } else {
      console.warn("AuthGuard : accès refusé, redirection vers /login");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
