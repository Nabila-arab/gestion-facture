import { Component, inject, OnInit, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Pour HTTP
import { ClientService } from '../../../shared/services/client/client.service';
import { Client } from '../../../shared/models/client/client.model';
import { EditClientComponent } from '../modals/edit-client/edit-client.component';


@Component({
  selector: 'app-afficher-clients',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, EditClientComponent], // Ajoutez les modules nécessaires ici
  templateUrl: './afficher-clients.component.html',
  styleUrl: './afficher-clients.component.css',
  providers: [ClientService],
})

@Injectable({
  providedIn: 'root', // Standalone API : assure que le service est globalement disponible
})
export class AfficherClientsComponent implements OnInit {

  //editClientComponent = inject (EditClientComponent);
  private clientService = inject(ClientService);
  
    clients: Client[] = []; // Liste des clients
    // pour le filtre
    filteredClients: Client[] = []; 
    filters: { [key: string]: string } = {};
    // pour la modale
    selectedClient: any;
    isEditModalOpen = false;
  
    ngOnInit(): void {
      // Charger les clients au démarrage du composant
      this.loadClient();
    }
  
      // Méthode pour charger les clients
      private loadClient() {
        this.clientService.getClients().subscribe(
          (data: Client[]) => {
            this.clients = data;
            this.selectedClient = this.clients; // pour rafraichir les données de la table /!\ Toute la table sera selactionnée
            this.filteredClients = this.selectedClient; // pour rafraichir les données de la table /!\ toute la table sera affichée
          },
          (error) => {
            console.error('Erreur lors de la récupération des clients :', error);
          }
        );
      }
  
      // Mise en  place des filtres
      applyFilters(): void {
  
        // Appliquer les filtres uniquement si au moins un filtre est renseigné
        if (Object.keys(this.filters).length === 0) {
          this.filteredClients = [...this.clients]; // Si aucun filtre, afficher toutes les clients
        } else {
          this.filteredClients = this.clients.filter((client) => {
            return Object.keys(this.filters).every((key) => {
              return client[key]?.toString().toLowerCase().includes(this.filters[key]);
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
  
        this.applyFilters();
      }
  
      // Mise en place de la modale
      openEditModal(client: Client): void {
        console.debug("Nous devons afficer la mmodale !");
        this.selectedClient = { ...client }; // Clone du client pour éviter les modifications directes
        this.isEditModalOpen = true;
        console.debug("Nous devons afficer la mmodale !");
      }
    
      closeEditModal(): void {
        this.isEditModalOpen = false;
        this.selectedClient = null;
      }
      
      updateClient(): void {
        if (this.selectedClient) {
          this.clientService.updateClient(this.selectedClient).subscribe(
            (updatedClient) => {
              // Mettre à jour le client dans la liste locale
              const index = this.clients.findIndex(
                (f) => f.raisonSociale === updatedClient.raisonSociale
              );
              if (index !== -1) {
                this.clients[index] = updatedClient;
                this.filteredClients[index] = updatedClient;
              }
              this.closeEditModal();
            },
            (error) => {
              console.error('Erreur lors de la mise à jour du client :', error);
            }
          );
        }
      }


      saveClient(updatedClient: Client) {
        if (this.selectedClient) {
          this.clientService.updateClient(updatedClient).subscribe(() => {
            this.loadClient();
            this.closeEditModal();
          });
        }
      }
}
