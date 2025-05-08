import { Component, inject  } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Pour les formulaires
import { HttpClientModule } from '@angular/common/http'; // Pour HTTP
import { FactureService } from '../../../shared/services/facture/facture.service';
import { Facture } from '../../../shared/models/facture/facture.model';

@Component({
  selector: 'app-saisir-facture',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Ajoutez les modules nécessaires ici
  templateUrl: './saisir-facture.component.html',
  styleUrls: ['./saisir-facture.component.css'],
  providers: [FactureService]
})
export class SaisirFactureComponent {
  facture: Facture = {
    reference: '',
    dateEtablissement: '',
    dateEcheance: '',
    tjm: 400, //number; // Tarif journalier moyen
    nbJours: 20, // number; // Nombre de jours
    montantHT: 8000, //number; // prix Hors Taxe
    montantTTC: 9600, //number; // prix Toute Taxe Comprise
    nomFournisseur: '',
    nomClient: '',
    statut: 'non payé',
  };

  private factureService = inject(FactureService);
  //constructor(private factureService: FactureService) {}

  // Méthode pour soumettre la facture
  saisirFacture() {
    this.factureService.addFacture(this.facture).subscribe(
      (response) => {
        alert('Facture ajoutée avec succès !');
        this.resetForm();
      },
      (error) => {
        console.error('Erreur lors de l’ajout de la facture :', error);
        alert('Erreur lors de l’ajout de la facture.');
      }
    );
  }

  // Réinitialiser le formulaire
  private resetForm() {
    this.facture = {
      reference: '',
      dateEtablissement: '',
      dateEcheance: '',
      tjm: 0, //number; // Tarif journalier moyen
      nbJours: 0, // number; // Nombre de jours
      montantHT: 0, //number; // prix Hors Taxe
      montantTTC: 0, //number; // prix Toute Taxe Comprise
      nomFournisseur: '',
      nomClient: '',
      statut: 'non payé',
    };
  }
}
