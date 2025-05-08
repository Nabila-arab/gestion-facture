import { Component, EventEmitter, Input, Output, inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Pour HTTP
import { ClientService } from '../../../../shared/services/client/client.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../../../shared/models/client/client.model';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule, CommonModule], // Ajoutez les modules nécessaires ici
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
  
})

@Injectable({
  providedIn: 'root', // Standalone API : assure que le service est globalement disponible
})

export class EditClientComponent {
  // @input : utilisé pour recevoir des données du composant parent
  @Input() selectedClient!:{
    id: number;
    raisonSociale: string;
    telephone: string;
    email: string;
    adresse: string;
  };

  @Output() closeModal = new EventEmitter<void>();
  @Output() saveChanges = new EventEmitter<Client>();

  private clientService = inject(ClientService);

  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      raisonSociale: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
    });
  }

  ngOnChanges() {
    if (this.selectedClient) {
      this.editForm.patchValue(this.selectedClient);
    }
  }

  onSave() {
    if (this.editForm.valid) {
      this.saveChanges.emit(this.editForm.value);
    }
  }
 
}
