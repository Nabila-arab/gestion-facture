import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FactureService } from './shared/services/facture/facture.service';
import { ClientService } from './shared/services/client/client.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), { provide: FactureService }, { provide: ClientService }]
};
