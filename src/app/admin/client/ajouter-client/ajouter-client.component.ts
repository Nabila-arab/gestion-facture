import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Pour les formulaires
import { HttpClientModule } from '@angular/common/http'; // Pour HTTP
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../../shared/services/client/client.service';
import { Client } from '../../../shared/models/client/client.model';

@Component({
  selector: 'app-ajouter-client',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './ajouter-client.component.html',
  styleUrl: './ajouter-client.component.css',
  providers: [ClientService]
})
export class AjouterClientComponent {

    client: Client = {
      id: 0,
      raisonSociale: '',
      telephone: '',
      email: '',
      adresse: '',
    };

  //clientForm: FormGroup;

  private clientService = inject(ClientService);

//  constructor(private fb: FormBuilder) {
//    this.clientForm = this.fb.group({
//      raisonSociale: [''],
//      telephone: [''],
//      email: [''],
//      adresse: [''],
//    });
//  }

  onSubmit() {

    this.clientService.addClient(this.client).subscribe(
      (response) => {
        alert('Client ajoutée avec succès !');
        this.resetForm();
      },
      (error) => {
        console.error('Erreur lors de l’ajout du client :', error);
        alert('Erreur lors de l’ajout du client.');
      }
    );
  }


  // Réinitialiser le formulaire
  private resetForm() {
    this.client = {
      id: 0,
      raisonSociale: '',
      telephone: '',
      email: '',
      adresse: '',
    };
  }
}
