import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FactureService } from '../../../shared/services/facture/facture.service';
import { SearchFilter } from '../../../shared/models/facture/searchFilter.model';


@Component({
  selector: 'app-search-factures',
  standalone: true,
  imports: [ CommonModule, FormsModule, HttpClientModule],
  templateUrl: './search-factures.component.html',
  styleUrls: ['./search-factures.component.css'],
  providers: [FactureService],
})
export class SearchFacturesComponent {

rechercheEffectuee: boolean = false;

  searchFilter: SearchFilter = {
    reference: '',
    dateEtablissement: '',
    dateEcheance: '',
    nomFournisseur: '',
  };


  factures: any[] = [];

  constructor(private factureService: FactureService) {}

  rechercherFactures() {
    alert("Méthode rechercherFactures() appelée ! c'est juste un test");
    //console.info("Recherche déclenchée avec : ", this.searchFilter.reference)
    //alert(this.searchFilter.reference + '====> ts')
    console.log("Filtres envoyés au backend : ", this.searchFilter);

    this.factureService.searchFactures(this.searchFilter).subscribe(
      (data) => {
        this.rechercheEffectuee = true;
        this.factures = data;
        console.log("✅ Factures reçues :", this.factures);

      },
      (err) => {
        this.rechercheEffectuee = true;
        this.factures = []; // vide
        if (err.status === 404) {
          console.warn('Aucune facture trouvée.'); // Pour debug
        } else {
          console.error('Erreur lors de la recherche :', err);
          }
        }
    );
  }
}
