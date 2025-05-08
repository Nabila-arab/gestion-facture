export interface Facture {
    id?: number;
    reference: string;
    dateEtablissement: string; // ISO format (yyyy-MM-dd)
    dateEcheance: string; // ISO format (yyyy-MM-dd)
    tjm: number; // Tarif journalier moyen
    nbJours: number; // Nombre de jours
    montantHT: number; // prix Hors Taxe
    montantTTC: number; // prix Toute Taxe Comprise
    nomFournisseur: string;
    nomClient: string;
    statut: 'payé' | 'non payé';
  }