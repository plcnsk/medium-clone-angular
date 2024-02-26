import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/shared/services/auth-interceptor.service';
import { authReducer } from './app/auth/store/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from './app/auth/store/effects/register.effect';
import { LoginEffect } from './app/auth/store/effects/login.effect';
import { GetCurrentUserEffect } from './app/auth/store/effects/get-current-user.effect';
import { AuthService } from './app/auth/services/auth.service';
import { PersistenceService } from './app/shared/services/persistence.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideState({ name: 'auth', reducer: authReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    provideEffects([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    AuthService,
    PersistenceService,
  ],
}).catch(err => console.error(err));
