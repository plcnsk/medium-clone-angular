import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

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
import { popularTagsReducer } from './shared/components/popular-tags/store/reducers';
import { GetPopularTagsEffect } from './shared/components/popular-tags/store/effects/get-popular-tags.effect';
import { PopularTagsService } from './shared/components/popular-tags/services/popular-tags.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ router: routerReducer }),
    provideRouterStore(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideState({ name: 'auth', reducer: authReducer }),
    provideState({ name: 'feed', reducer: feedReducer }),
    provideState({ name: 'popularTags', reducer: popularTagsReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    provideEffects([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      GetFeedEffect,
      GetPopularTagsEffect,
    ]),
    AuthService,
    PersistenceService,
    FeedService,
    PopularTagsService,
  ],
};
