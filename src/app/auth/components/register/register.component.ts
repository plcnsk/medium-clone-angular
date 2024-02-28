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

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { registerAction } from '../../store/actions/register.action';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { BackendErrorsMessagesComponent } from '../../../shared/components/backend-errors-messages/backend-errors-messages.component';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
    BackendErrorsMessagesComponent,
  ],
  standalone: true,
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(registerAction({ request }));
  }
}
