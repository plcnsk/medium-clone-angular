import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { PersistenceService } from './shared/services/persistence.service';
import { authInterceptor } from './shared/services/auth-interceptor.service';
import { authReducer } from './pages/auth/store/reducers';
import { RegisterEffect } from './pages/auth/store/effects/register.effect';
import { LoginEffect } from './pages/auth/store/effects/login.effect';
import { GetCurrentUserEffect } from './pages/auth/store/effects/get-current-user.effect';
import { AuthService } from './pages/auth/services/auth.service';
import { GetFeedEffect } from './pages/global-feed/components/feed/store/effects/ get-feed.effect';
import { feedReducer } from './pages/global-feed/components/feed/store/reducers';
import { FeedService } from './pages/global-feed/components/feed/services/feed.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideState({ name: 'auth', reducer: authReducer }),
    provideState({ name: 'feed', reducer: feedReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    provideEffects([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      GetFeedEffect,
    ]),
    AuthService,
    PersistenceService,
    FeedService,
  ],
};
