import { Routes } from '@angular/router';

import { GlobalFeedComponent } from './pages/global-feed/global-feed.component';
import { RegisterComponent } from './pages/auth/components/register/register.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { YourFeedComponent } from './pages/your-feed/your-feed.component';

export const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
  {
    path: 'feed',
    component: YourFeedComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
