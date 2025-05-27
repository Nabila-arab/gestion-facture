import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../../models/facture/facture.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Standalone API : assure que le service est globalement disponible
})
export class FactureService {
  private apiUrl = 'http://localhost:8080/api/factures'; // URL du backend

  constructor(private http: HttpClient) {}

  addFacture(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(this.apiUrl, facture);
  }

  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiUrl);
  }

  // Mise à jour d'une facture
  updateFacture(facture: Facture): Observable<Facture> {
    return this.http.put<Facture>(`${this.apiUrl}/${facture.reference}`, facture);
  }
  
  searchFactures(filter: any): Observable<Facture[]> {
    
    //alert(filter.reference + '====> test');
    const params = new HttpParams({ fromObject: filter });
    alert(params.get('reference') + '====> service'); ///<================================
     // 🔍 Affichage des valeurs spécifiques
    //console.log('reference =', params.get('reference'));
    //console.log('dateEcheance =', params.get('dateEcheance'));
    //console.log('statut =', params.get('statut'));
    //console.log('nomClient =', params.get('nomClient'));


  return this.http.get<Facture[]>(`${this.apiUrl}/search`, { params });
  }

}
