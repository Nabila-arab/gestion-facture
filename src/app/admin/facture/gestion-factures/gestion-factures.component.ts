import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { SaisirFactureComponent } from "../saisir-facture/saisir-facture.component";
import { AfficherFacturesComponent } from "../afficher-factures/afficher-factures.component";

@Component({
  selector: 'app-gestion-factures',
  standalone: true,
  imports: [RouterModule, CommonModule, SaisirFactureComponent, AfficherFacturesComponent], // Ajoutez RouterModule ici
  templateUrl: './gestion-factures.component.html',
  styleUrl: './gestion-factures.component.css'
})
export class GestionFacturesComponent {

  activeTab: string = 'afficher'; // Onglet actif par défaut

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
