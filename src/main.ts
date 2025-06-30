import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; //  Importer le client HTTP


/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
*/

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // 👈 Ajouter le HTTP Client ici
    // ... Tu peux ajouter d'autres providers ici si nécessaire
  ],
}).catch((err) => console.error(err));
