import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { RegisterRequestInterface } from '../types/register-request.interface';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { LoginRequestInterface } from '../types/login-request.interface';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';

    return this.http
      .get<AuthResponseInterface>(url)
      .pipe(map(response => this.getUser(response)));
  }
}
