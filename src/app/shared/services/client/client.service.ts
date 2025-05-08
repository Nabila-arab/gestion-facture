import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../models/client/client.model';

@Injectable({
  providedIn: 'root', // Standalone API : assure que le service est globalement disponible
})
export class ClientService {


    private readonly apiUrl = 'http://localhost:8080/api/clients'; // URL de l'API backend

    constructor(private http: HttpClient) {}
  
    getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(this.apiUrl);
    }
  
    addClient(client: Client): Observable<Client> {
      return this.http.post<Client>(this.apiUrl, client);
    }

    // Mise à jour d'une facture
    updateClient(client: Client): Observable<Client> {
      return this.http.put<Client>(`${this.apiUrl}/${client.raisonSociale}`, client);
    }
    
}