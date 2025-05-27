import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { GestionFacturesComponent } from './admin/facture/gestion-factures/gestion-factures.component';
import { SaisirFactureComponent } from './admin/facture/saisir-facture/saisir-facture.component';
import { AfficherFacturesComponent } from './admin/facture/afficher-factures/afficher-factures.component';
import { GestionCollaborateursComponent } from './admin/collab/gestion-collaborateurs/gestion-collaborateurs.component';
import { CollabComponent } from './collab/collab.component';
import { GestionClientsComponent } from './admin/client/gestion-clients/gestion-clients.component';
import { AjouterClientComponent } from './admin/client/ajouter-client/ajouter-client.component';
import { AfficherClientsComponent } from './admin/client/afficher-clients/afficher-clients.component';
import { LoginComponent } from './auth/login/login.component';
import { GardService } from './shared/services/auth/gard.service';
import { SearchFacturesComponent } from './admin/facture/search-factures/search-factures.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [GardService] },
  { path: '', component: HomeComponent }, // Écran d'accueil
  { path: 'login', component: LoginComponent }, // Écran d'Authentification
  { path: 'collab', component: CollabComponent }, // espace Collab
  // Espace Admin
  { path: 'admin', component: AdminComponent, children: [
      { path: 'gestion-factures', component: GestionFacturesComponent, children: [
          { path: 'saisir', component: SaisirFactureComponent },
          { path: 'afficher', component: AfficherFacturesComponent },
          { path: 'recherche', component: SearchFacturesComponent},
      ] },
      { path: 'gestion-collaborateurs', component: GestionCollaborateursComponent },
      { path: 'gestion-clients', component: GestionClientsComponent, children: [
        { path: 'saisir', component: AjouterClientComponent },
        { path: 'afficher', component: AfficherClientsComponent },
    ]  },
  ]},
];
