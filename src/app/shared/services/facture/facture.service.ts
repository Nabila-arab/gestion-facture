import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../../models/facture/facture.model';

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
  
}
