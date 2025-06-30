import { Component, OnInit } from '@angular/core';
import { RouterModule, NavigationEnd, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  today: Date = new Date();
   currentUrl: string = '';
   username: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.urlAfterRedirects;
    });

    // Récupérer le nom stocké dans le localStorage
    const storedUser = localStorage.getItem('username');
    this.username = storedUser ? storedUser : 'Utilisateur';
  }

  isHomeRoute(): boolean {
    // Quand le chemin est exactement /admin, affiche le contenu de bienvenue
    return this.currentUrl === '/admin';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


images: string[] = [
  'assets/images/slide1.jpg',
  'assets/images/slide2.jpg',
  'assets/images/slide3.jpg'
];

currentIndex: number = 0;

ngOnInit() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }, 5000);
}



}
