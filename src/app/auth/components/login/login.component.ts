import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AsyncPipe, NgIf } from '@angular/common';
import { PushPipe } from '@ngrx/component';

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { AuthService } from '../../services/auth.service';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { BackendErrorsMessagesComponent } from '../../../shared/components/backend-errors-messages/backend-errors-messages.component';
import { LoginRequestInterface } from '../../types/login-request.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
    BackendErrorsMessagesComponent,
    PushPipe,
  ],
  standalone: true,
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(loginAction({ request }));
  }
}
