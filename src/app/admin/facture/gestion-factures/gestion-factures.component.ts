import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { SaisirFactureComponent } from "../saisir-facture/saisir-facture.component";
import { AfficherFacturesComponent } from "../afficher-factures/afficher-factures.component";
import { SearchFacturesComponent } from "../search-factures/search-factures.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-gestion-factures',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule, SaisirFactureComponent, AfficherFacturesComponent, SearchFacturesComponent], 
  templateUrl: './gestion-factures.component.html',
  styleUrls: ['./gestion-factures.component.css']
})
export class GestionFacturesComponent {

  activeTab: string = 'afficher'; // Onglet actif par défaut

  setActiveTab(tab: string) {
    console.log("Tab actif :", tab);
    this.activeTab = tab;
  }

}

