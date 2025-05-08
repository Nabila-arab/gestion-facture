import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { AjouterClientComponent } from "../ajouter-client/ajouter-client.component";
import { AfficherClientsComponent } from "../afficher-clients/afficher-clients.component";

@Component({
  selector: 'app-gestion-clients',
  standalone: true,
  imports: [RouterModule, CommonModule, AjouterClientComponent, AfficherClientsComponent], // Ajoutez RouterModule ici
  templateUrl: './gestion-clients.component.html',
  styleUrls: ['./gestion-clients.component.css'],
})
export class GestionClientsComponent {

  activeTab: string = 'afficher'; // Onglet actif par défaut

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
