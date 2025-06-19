import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  propEmail: FormControl = new FormControl<String>('');
  propPassword:  FormControl = new FormControl<String>('');
  propRemember:  FormControl = new FormControl<boolean>(false);

  constructor(private authService: AuthService, private router: Router) {
  }

  //loginForm: FormGroup;

  /*constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }*/

  // email et password sont des noms de champs
  form: FormGroup = new FormGroup({
    email: this.propEmail,
    password: this.propPassword
  });

  // Nous allons créer une propriété submitted pour gérer la soumission du formulaire
  submitted: boolean = false;

  /*login(){
    this.submitted = true;
    if(this.form.invalid) return;
    return true;
  }*/

  /*login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      // Simuler une authentification
      if (email === 'usf@mallyance.fr' && password === 'usf123') {
        localStorage.setItem('user', JSON.stringify({ email }));

        // Redirection vers /admin
        this.router.navigate(['/admin']).then (success => {
          if(success){
            console.log("Redirection réussie vers /admin");
          }else{
            console.error("Échec de la redirection");
          }
        });
        //window.location.href = '/admin';
      } else {
        alert('Identifiants incorrects');
      }
    }
  }*/


  login() {

    if (this.form.valid) {
      const { email, password } = this.form.value;
    
      if (this.authService.login(email, password)) {
         // Enregistre le username dans localStorage
        localStorage.setItem('username', email);
        
        console.log("Connexion réussie, redirection vers /admin");
  
        this.router.navigate(['/admin']).then(success => {
          if (!success) {
            console.warn("Échec de la redirection, tentative forcée");
            window.location.href = '/admin';
          }
        });
      } else {
        console.warn("Échec de connexion");
      }
    }
  }
    
}