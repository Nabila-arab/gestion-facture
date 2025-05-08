import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Pour HTTP
import { FactureService } from '../../../shared/services/facture/facture.service';
import { Facture } from '../../../shared/models/facture/facture.model';

@Component({
  selector: 'app-afficher-factures',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule], // Ajoutez les modules nécessaires ici
  templateUrl: './afficher-factures.component.html',
  styleUrls: ['./afficher-factures.component.css'],
  providers: [FactureService],
})
export class AfficherFacturesComponent  implements OnInit {

  private factureService = inject(FactureService);

  factures: Facture[] = []; // Liste des factures
  // pour le filtre
  filteredFactures: Facture[] = []; 
  filters: { [key: string]: string } = {};
  // pour la modale
  selectedFacture: any;
  isEditModalOpen = false;

  ngOnInit(): void {
    // Charger les factures au démarrage du composant
    this.loadFactures();
  }

    // Méthode pour charger les factures
    private loadFactures() {
      this.factureService.getFactures().subscribe(
        (data: Facture[]) => {
          this.factures = data;
          this.selectedFacture = this.factures; // pour rafraichir les données de la table /!\ Toute la table sera selactionnée
          this.filteredFactures = this.selectedFacture; // pour rafraichir les données de la table /!\ toute la table ser affichée
        },
        (error) => {
          console.error('Erreur lors de la récupération des factures :', error);
        }
      );
    }

    // Mise en  place des filtres
    applyFilters(): void {
      //this.filteredFactures = this.factures.filter((facture) => {
      //  return Object.keys(this.filters).every((key) => {
      //    const value = (facture as any)[key]?.toString().toLowerCase() || '';
      //    return value.includes(this.filters[key].toLowerCase());
      //  });
      //});

      // Appliquer les filtres uniquement si au moins un filtre est renseigné
      if (Object.keys(this.filters).length === 0) {
        this.filteredFactures = [...this.factures]; // Si aucun filtre, afficher toutes les factures
      } else {
        this.filteredFactures = this.factures.filter((facture) => {
          return Object.keys(this.filters).every((key) => {
            return facture[key]?.toString().toLowerCase().includes(this.filters[key]);
          });
        });
      }
    }
  
    updateFilter(column: string, event: Event): void {
      const inputElement = event.target as HTMLInputElement;
      const value = inputElement.value.toLowerCase();

      // Si la valeur du filtre est vide, supprimer le filtre pour cette colonne
      if (!value.trim()) {
        delete this.filters[column];
      } else {
        // Sinon, ajouter le filtre en minuscule
        this.filters[column] = value.toLowerCase();
      }

      //const value = event.target.value;
      //if (value) {
      //  this.filters[column] = value;
      //} else {
      //  delete this.filters[column];
      //}
      
      //this.selectedFacture = this.factures; // pour rafraichir les données de la table /!\
      this.applyFilters();
    }

    // Mise en place de la modale
    openEditModal(facture: Facture): void {
      this.selectedFacture = { ...facture }; // Clone de la facture pour éviter les modifications directes
      this.isEditModalOpen = true;
    }
  
    closeEditModal(): void {
      this.isEditModalOpen = false;
      this.selectedFacture = null;
    }
    
    updateFacture(): void {
      if (this.selectedFacture) {
        this.factureService.updateFacture(this.selectedFacture).subscribe(
          (updatedFacture) => {
            // Mettre à jour la facture dans la liste locale
            const index = this.factures.findIndex(
              (f) => f.reference === updatedFacture.reference
            );
            if (index !== -1) {
              this.factures[index] = updatedFacture;
              this.filteredFactures[index] = updatedFacture;
            }
            this.closeEditModal();
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de la facture :', error);
          }
        );
      }
    }

  /*
  factures = [
    { reference: 'REF001', dateEtablissement: '2023-12-31', montant: 150, nomFournisseur: 'Fournisseur 1', nomClient: 'Client 1', statut: 'payé' },
    { reference: 'REF002', dateEtablissement: '2023-12-30', montant: 200, nomFournisseur: 'Fournisseur 2', nomClient: 'Client 2', statut: 'non payé' },
  ];
  */

}
