import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { authReducer } from './auth/store/reducers';
import { AuthService } from './auth/services/auth.service';
import { RegisterEffect } from './auth/store/effects/register.effect';
import { PersistenceService } from './shared/services/persistence.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideHttpClient(),
    provideState({ name: 'auth', reducer: authReducer }),
    provideEffects([RegisterEffect]),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    AuthService,
    PersistenceService,
  ],
};
