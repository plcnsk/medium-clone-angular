import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { authReducer } from './auth/store/reducers';
import { AuthService } from './auth/services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideHttpClient(),
    provideState({ name: 'auth', reducer: authReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    AuthService,
  ],
};
