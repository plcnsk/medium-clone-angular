import { inject } from '@angular/core';
import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { PersistenceService } from './persistence.service';

export const AuthInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const persistenceService = inject(PersistenceService);
  const token = persistenceService.get('accessToken');

  req = req.clone({
    setHeaders: { Authorization: token ? `Token ${token}` : '' },
  });

  return next(req);
};
